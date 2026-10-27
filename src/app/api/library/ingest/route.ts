import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import fs from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

async function getFiles(dir: string): Promise<string[]> {
  const dirents = await fs.readdir(dir, { withFileTypes: true })
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name)
    return dirent.isDirectory() ? getFiles(res) : res
  }))
  return Array.prototype.concat(...files)
}

export async function POST(req: NextRequest) {
  try {
    const studyMaterialPath = path.join(process.cwd(), 'Study Material')
    
    // 1. File Discovery
    let allFiles: string[] = []
    try {
      allFiles = await getFiles(studyMaterialPath)
    } catch (err) {
      console.warn("Study Material folder not found or cannot be read. Creating an empty one.", err)
      await fs.mkdir(studyMaterialPath, { recursive: true })
    }

    // 2. File Validation and Status Assignment
    let importedCount = 0
    let failedCount = 0
    let duplicates = 0

    const validExtensions = ['.pdf', '.epub', '.txt', '.docx']
    
    for (const filePath of allFiles) {
      const ext = path.extname(filePath).toLowerCase()
      const fileName = path.basename(filePath)
      
      const existing = await prisma.book.findFirst({
        where: { filePath }
      })

      if (existing) {
        duplicates++
        continue
      }

      if (!validExtensions.includes(ext)) {
        await prisma.book.create({
          data: {
            title: fileName,
            filePath: filePath,
            fileType: ext || 'unknown',
            importStatus: 'UNSUPPORTED',
            failReason: 'Unsupported file extension'
          }
        })
        failedCount++
        continue
      }

      try {
        const stats = await fs.stat(filePath)
        
        // Very basic metadata parsing (e.g., using filename as title)
        let title = fileName.replace(ext, '').replace(/[-_]/g, ' ')
        // Basic AI classification could be done here asynchronously via a worker, but we'll assign basic tags
        
        await prisma.book.create({
          data: {
            title,
            filePath,
            fileType: ext,
            fileSizeBytes: stats.size,
            importStatus: 'READY', // In a real app, this might be PENDING until text extraction is done
            category: 'Uncategorized', // AI would classify this
          }
        })
        
        importedCount++
      } catch (err: any) {
        await prisma.book.create({
          data: {
            title: fileName,
            filePath,
            fileType: ext,
            importStatus: 'FAILED',
            failReason: err.message
          }
        })
        failedCount++
      }
    }

    return NextResponse.json({
      success: true,
      totalDiscovered: allFiles.length,
      importedCount,
      failedCount,
      duplicates
    })
  } catch (error: any) {
    console.error('Ingestion Error:', error)
    return NextResponse.json({ error: error.message || 'Failed to ingest books.' }, { status: 500 })
  }
}
