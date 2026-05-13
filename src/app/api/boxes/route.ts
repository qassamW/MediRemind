import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { BoxStatus } from '@/app/generated/prisma'

const boxInclude = {
  patients: { select: { id: true, name: true } },
  medicineAssignments: {
    include: {
      medicine: { select: { id: true, name: true, type: true } },
    },
    orderBy: { createdAt: 'asc' as const },
  },
} as const

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request)

    const boxes = await prisma.box.findMany({
      include: boxInclude,
      orderBy: { boxLabel: 'asc' },
    })

    return Response.json(boxes)
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAuth(request)

    const body = await request.json()
    const { boxLabel, location, notes } = body

    const box = await prisma.box.create({
      data: {
        boxLabel,
        location: location ?? null,
        notes: notes ?? null,
        status: BoxStatus.ACTIVE,
      },
      include: boxInclude,
    })

    return Response.json(box, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
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