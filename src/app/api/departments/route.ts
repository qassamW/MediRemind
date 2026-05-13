import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, requireAdmin } from '@/lib/guards'
import { DepartmentStatus } from '@/app/generated/prisma'

const deptInclude = {
  rooms: { orderBy: { roomNumber: 'asc' as const } },
  _count: { select: { patients: true } },
} as const

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request)

    const departments = await prisma.department.findMany({
      include: deptInclude,
      orderBy: { name: 'asc' },
    })

    return Response.json(departments)
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    await requireAdmin(request)

    const body = await request.json()
    const { name, description, head } = body

    const department = await prisma.department.create({
      data: {
        name,
        description,
        head,
        status: DepartmentStatus.ACTIVE,
      },
      include: deptInclude,
    })

    return Response.json(department, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}