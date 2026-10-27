import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const category = searchParams.get('category')
    const subcategory = searchParams.get('subcategory')
    const level = searchParams.get('level')
    const contentType = searchParams.get('contentType')
    const topic = searchParams.get('topic')
    const relevance = searchParams.get('relevance')
    const status = searchParams.get('status') || 'READY'
    const readingStatus = searchParams.get('readingStatus')
    const search = searchParams.get('search')

    const where: any = { importStatus: status }
    if (category) where.category = category
    if (subcategory) where.subcategory = subcategory
    if (level) where.level = level
    if (contentType) where.contentType = contentType
    if (topic) where.topics = { contains: topic }
    if (relevance) where.relevanceAreas = { contains: relevance }

    if (readingStatus === 'Not Started') {
      where.progress = { none: {} } // No progress record
    } else if (readingStatus === 'In Progress') {
      where.progress = { some: { isCompleted: false, percentage: { gt: 0 } } }
    } else if (readingStatus === 'Completed') {
      where.progress = { some: { isCompleted: true } }
    }
    if (search) {
      where.OR = [
        { title: { contains: search } },
        { author: { contains: search } },
        { shortDescription: { contains: search } },
        { topics: { contains: search } }
      ]
    }

    const books = await prisma.book.findMany({
      where,
      include: {
        progress: true
      },
      orderBy: { title: 'asc' }
    })

    const stats = {
      total: await prisma.book.count(),
      ready: await prisma.book.count({ where: { importStatus: 'READY' } }),
      failed: await prisma.book.count({ where: { importStatus: 'FAILED' } }),
      unsupported: await prisma.book.count({ where: { importStatus: 'UNSUPPORTED' } })
    }

    return NextResponse.json({ books, stats })
  } catch (error: any) {
    console.error('Library API Error:', error)
    return NextResponse.json({ error: error.message || 'Failed to fetch library.' }, { status: 500 })
  }
}
