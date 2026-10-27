import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import fallbackBooks from '@/data/books.json'
import fs from 'fs'
import path from 'path'

let prisma: PrismaClient | null = null
function getPrisma() {
  if (!prisma) {
    try {
      prisma = new PrismaClient()
    } catch {
      prisma = null
    }
  }
  return prisma
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params
    const bookId = resolvedParams.id
    if (!bookId) {
      return NextResponse.json({ error: 'Book ID required' }, { status: 400 })
    }

    let book: any = null
    try {
      const client = getPrisma()
      if (client) {
        book = await client.book.findUnique({
          where: { id: bookId }
        })
      }
    } catch {
      // ignore
    }

    if (!book) {
      book = (fallbackBooks as any[]).find(b => b.id === bookId)
    }

    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    // Determine the relative path of the file
    let relativeSubPath = ''
    if (book.relativeFilePath) {
      relativeSubPath = book.relativeFilePath
    } else if (book.filePath) {
      const match = book.filePath.match(/(?:public[\\\/]books|Study Material)[\\\/](.+)$/i)
      relativeSubPath = match ? match[1].replace(/\\/g, '/') : path.basename(book.filePath)
    }

    // Public URL served statically by Next.js & Vercel Edge CDN
    const encodedSegments = relativeSubPath.split('/').map(seg => encodeURIComponent(seg)).join('/')
    const publicUrl = `/books/${encodedSegments}`

    // 307 redirect allows Vercel's global CDN or local Next.js static server to stream the PDF directly with byte-range support
    return NextResponse.redirect(new URL(publicUrl, req.url), 307)

  } catch (error: any) {
    console.error('File serving error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
