import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { BoxStatus } from '@/app/generated/prisma'

const boxInclude = {
  patients: { select: { id: true, name: true } },
  contents: {
    include: { medicine: { select: { id: true, name: true, type: true } } },
    orderBy: { createdAt: 'asc' as const },
  },
} as const

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const box = await prisma.box.findUnique({ where: { id }, include: boxInclude })

    if (!box) {
      return Response.json({ error: 'Box not found' }, { status: 404 })
    }

    return Response.json(box)
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const body = await request.json()
    const { status, location, notes, boxLabel } = body

    const data: Record<string, unknown> = {}
    if (status !== undefined) data.status = status as BoxStatus
    if (location !== undefined) data.location = location
    if (notes !== undefined) data.notes = notes
    if (boxLabel !== undefined) data.boxLabel = boxLabel

    const box = await prisma.box.update({
      where: { id },
      data,
      include: boxInclude,
    })

    return Response.json(box)
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Box not found' }, { status: 404 })
    }
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2002'
    ) {
      return Response.json({ error: 'Box label already exists' }, { status: 409 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}