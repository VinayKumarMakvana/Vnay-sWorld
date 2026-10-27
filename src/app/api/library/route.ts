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

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const category = searchParams.get('category')
  const subcategory = searchParams.get('subcategory')
  const level = searchParams.get('level')
  const contentType = searchParams.get('contentType')
  const topic = searchParams.get('topic')
  const relevance = searchParams.get('relevance')
  const status = searchParams.get('status') || 'READY'
  const readingStatus = searchParams.get('readingStatus')
  const search = searchParams.get('search')?.toLowerCase()

  // 1. Attempt Prisma query
  try {
    const client = getPrisma()
    if (client) {
      const where: any = { importStatus: status }
      if (category && category !== 'ALL') where.category = category
      if (subcategory) where.subcategory = subcategory
      if (level) where.level = level
      if (contentType) where.contentType = contentType
      if (topic) where.topics = { contains: topic }
      if (relevance) where.relevanceAreas = { contains: relevance }

      if (readingStatus === 'Not Started') {
        where.progress = { none: {} }
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

      const books = await client.book.findMany({
        where,
        include: { progress: true },
        orderBy: { title: 'asc' }
      })

      if (books && books.length > 0) {
        const stats = {
          total: await client.book.count(),
          ready: await client.book.count({ where: { importStatus: 'READY' } }),
          failed: await client.book.count({ where: { importStatus: 'FAILED' } }),
          unsupported: await client.book.count({ where: { importStatus: 'UNSUPPORTED' } })
        }
        return NextResponse.json({ books, stats })
      }
    }
  } catch (err) {
    console.warn('Prisma query failed, serving books from static catalog fallback:', err)
  }

  // 2. High-performance fallback from books.json (Guaranteed on Vercel)
  try {
    let filtered = (fallbackBooks as any[]).filter(b => (b.importStatus || 'READY') === status)

    if (category && category !== 'ALL') {
      filtered = filtered.filter(b => b.category === category)
    }
    if (subcategory) {
      filtered = filtered.filter(b => b.subcategory === subcategory)
    }
    if (level) {
      filtered = filtered.filter(b => b.level === level)
    }
    if (contentType) {
      filtered = filtered.filter(b => b.contentType === contentType)
    }
    if (topic) {
      filtered = filtered.filter(b => b.topics?.toLowerCase().includes(topic.toLowerCase()))
    }
    if (relevance) {
      filtered = filtered.filter(b => b.relevanceAreas?.toLowerCase().includes(relevance.toLowerCase()))
    }
    if (search) {
      filtered = filtered.filter(b =>
        b.title?.toLowerCase().includes(search) ||
        b.author?.toLowerCase().includes(search) ||
        b.shortDescription?.toLowerCase().includes(search) ||
        b.topics?.toLowerCase().includes(search)
      )
    }

    const stats = {
      total: fallbackBooks.length,
      ready: fallbackBooks.filter((b: any) => (b.importStatus || 'READY') === 'READY').length,
      failed: 0,
      unsupported: 0
    }

    return NextResponse.json({ books: filtered, stats })
  } catch (err: any) {
    console.error('Library fallback error:', err)
    return NextResponse.json({ error: err.message || 'Failed to fetch library' }, { status: 500 })
  }
}
