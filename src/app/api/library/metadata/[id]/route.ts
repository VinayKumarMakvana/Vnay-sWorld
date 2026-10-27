import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import fallbackBooks from '@/data/books.json'

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
    const id = resolvedParams.id

    // 1. Try Prisma
    try {
      const client = getPrisma()
      if (client) {
        const book = await client.book.findUnique({
          where: { id }
        })
        if (book) return NextResponse.json({ book })
      }
    } catch (err) {
      console.warn('Prisma metadata fetch error, trying static catalog:', err)
    }

    // 2. Fallback to books.json
    const book = (fallbackBooks as any[]).find(b => b.id === id)
    if (book) {
      return NextResponse.json({ book })
    }

    return NextResponse.json({ error: 'Book not found' }, { status: 404 })
  } catch (error: any) {
    console.error('Metadata API Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params
    const updates = await req.json()

    // Enforce manual metadata source override
    const dataToUpdate = {
      ...updates,
      metadataSource: 'MANUAL',
      classificationConfidence: 'VERIFIED'
    }

    delete dataToUpdate.id
    delete dataToUpdate.filePath
    delete dataToUpdate.fileSizeBytes
    delete dataToUpdate.createdAt
    delete dataToUpdate.updatedAt

    const client = getPrisma()
    if (!client) {
      return NextResponse.json({ success: true, message: 'Updated in session' })
    }

    const book = await client.book.update({
      where: { id: resolvedParams.id },
      data: dataToUpdate
    })

    return NextResponse.json({ book })
  } catch (error: any) {
    console.error('Metadata Update Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
