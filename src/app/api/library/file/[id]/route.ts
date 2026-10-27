import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params
    const bookId = resolvedParams.id
    if (!bookId) {
      return NextResponse.json({ error: 'Book ID required' }, { status: 400 })
    }

    const book = await prisma.book.findUnique({
      where: { id: bookId }
    })

    if (!book || !book.filePath) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    // Security Hardening: Ensure the resolved path is inside the project directory
    const resolvedPath = path.resolve(book.filePath)
    const projectRoot = path.resolve(/*turbopackIgnore: true*/ process.cwd())
    const studyMaterialDir = path.join(projectRoot, 'Study Material')

    // It must explicitly start with the intended directory to prevent traversal or symlink escapes
    const relativePath = path.relative(studyMaterialDir, resolvedPath)
    const isOutside = relativePath.startsWith('..') || path.isAbsolute(relativePath)

    if (isOutside) {
      return NextResponse.json({ error: 'Forbidden: Path escape detected' }, { status: 403 })
    }

    if (!fs.existsSync(resolvedPath)) {
      return NextResponse.json({ error: 'Source file missing' }, { status: 404 })
    }

    const stats = fs.statSync(resolvedPath)
    
    // Determine content type safely
    let contentType = 'application/octet-stream'
    const ext = path.extname(resolvedPath).toLowerCase()
    if (ext === '.pdf') contentType = 'application/pdf'
    if (ext === '.epub') contentType = 'application/epub+zip'
    if (ext === '.txt') contentType = 'text/plain'
    if (ext === '.docx') contentType = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

    // Stream the file natively
    const stream = fs.createReadStream(resolvedPath) as any
    const response = new NextResponse(stream)
    response.headers.set('Content-Type', contentType)
    response.headers.set('Content-Length', stats.size.toString())
    // Allow inline viewing instead of forcing download
    response.headers.set('Content-Disposition', `inline; filename="${path.basename(resolvedPath)}"`)
    
    return response

  } catch (error: any) {
    console.error('File serving error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
