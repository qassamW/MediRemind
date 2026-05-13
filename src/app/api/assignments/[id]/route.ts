import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { AssignmentStatus } from '@/app/generated/prisma'

const assignmentInclude = {
  medicine: true,
  patient: { select: { id: true, name: true } },
} as const

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const assignment = await prisma.medicineAssignment.findUnique({
      where: { id },
      include: assignmentInclude,
    })

    if (!assignment) {
      return Response.json({ error: 'Assignment not found' }, { status: 404 })
    }

    return Response.json(assignment)
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
    const {
      status,
      dosage,
      administrationMethodOverride,
      scheduleTimes,
      startDate,
      durationDays,
      repeat,
      notes,
    } = body

    const data: Record<string, unknown> = {}
    if (status !== undefined) data.status = status as AssignmentStatus
    if (dosage !== undefined) data.dosage = dosage
    if (administrationMethodOverride !== undefined) data.administrationMethodOverride = administrationMethodOverride
    if (scheduleTimes !== undefined) data.scheduleTimes = scheduleTimes
    if (notes !== undefined) data.notes = notes
    if (repeat !== undefined) data.repeat = Boolean(repeat)

    if (startDate !== undefined || durationDays !== undefined) {
      const existing = await prisma.medicineAssignment.findUnique({ where: { id } })
      if (!existing) return Response.json({ error: 'Assignment not found' }, { status: 404 })

      const start = startDate ? new Date(startDate) : existing.startDate
      const days = durationDays !== undefined ? Number(durationDays) : existing.durationDays
      const end = new Date(start)
      end.setDate(end.getDate() + days)

      data.startDate = start
      data.durationDays = days
      data.endDate = end
    }

    const assignment = await prisma.medicineAssignment.update({
      where: { id },
      data,
      include: assignmentInclude,
    })

    return Response.json(assignment)
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Assignment not found' }, { status: 404 })
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
    await requireAuth(request)
    const { id } = await params

    await prisma.medicineAssignment.update({
      where: { id },
      data: { status: AssignmentStatus.CANCELLED },
    })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Assignment not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}