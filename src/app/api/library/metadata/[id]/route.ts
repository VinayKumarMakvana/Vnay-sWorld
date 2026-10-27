import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const resolvedParams = await params
    const book = await prisma.book.findUnique({
      where: { id: resolvedParams.id }
    })

    if (!book) {
      return NextResponse.json({ error: 'Book not found' }, { status: 404 })
    }

    return NextResponse.json({ book })
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

    // Do not allow updating read-only fields
    delete dataToUpdate.id
    delete dataToUpdate.filePath
    delete dataToUpdate.fileSizeBytes
    delete dataToUpdate.createdAt
    delete dataToUpdate.updatedAt

    const book = await prisma.book.update({
      where: { id: resolvedParams.id },
      data: dataToUpdate
    })

    return NextResponse.json({ book })
  } catch (error: any) {
    console.error('Metadata Update Error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
