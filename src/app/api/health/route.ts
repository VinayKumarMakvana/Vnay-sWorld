import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET() {
  const health: any = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    services: {
      database: 'unknown'
    }
  }

  try {
    // Basic liveness & readiness check for DB
    await prisma.$queryRaw`SELECT 1`
    health.services.database = 'connected'
  } catch (error: any) {
    health.status = 'degraded'
    health.services.database = 'disconnected'
    // Log internally but do not expose raw error
    console.error('Health Check DB Error:', error.message)
    return NextResponse.json(health, { status: 503 })
  }

  return NextResponse.json(health, { status: 200 })
}
