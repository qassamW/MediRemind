import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth, requireAdmin } from '@/lib/guards'
import { DepartmentStatus, PatientStatus } from '@/app/generated/prisma'

const deptInclude = {
  rooms: { orderBy: { roomNumber: 'asc' as const } },
  _count: { select: { patients: true } },
} as const

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const department = await prisma.department.findUnique({
      where: { id },
      include: {
        rooms: { orderBy: { roomNumber: 'asc' } },
        patients: {
          where: { status: PatientStatus.ADMITTED },
          select: { id: true, name: true, room: true, status: true },
        },
      },
    })

    if (!department) {
      return Response.json({ error: 'Department not found' }, { status: 404 })
    }

    return Response.json(department)
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
    const { name, description, head, status } = body

    const data: Record<string, unknown> = {}
    if (name !== undefined) data.name = name
    if (description !== undefined) data.description = description
    if (head !== undefined) data.head = head
    if (status !== undefined) data.status = status as DepartmentStatus

    const department = await prisma.department.update({
      where: { id },
      data,
      include: deptInclude,
    })

    return Response.json(department)
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Department not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAdmin(request)
    const { id } = await params

    const admittedCount = await prisma.patient.count({
      where: { departmentId: id, status: PatientStatus.ADMITTED },
    })

    if (admittedCount > 0) {
      return Response.json(
        { error: 'Cannot delete department with admitted patients. Deactivate it instead.' },
        { status: 409 },
      )
    }

    await prisma.department.delete({ where: { id } })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Department not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}