import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { PatientStatus, Gender, AssignmentStatus } from '@/app/generated/prisma'

const patientDetail = {
  department: true,
  box: true,
  medicineAssignments: { include: { medicine: true } },
} as const

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const patient = await prisma.patient.findUnique({
      where: { id },
      include: patientDetail,
    })

    if (!patient) {
      return Response.json({ error: 'Patient not found' }, { status: 404 })
    }

    return Response.json(patient)
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
    const { name, age, gender, nationalId, departmentId, room, allergies, notes, status,
            boxId, boxStartDate, boxDurationDays, boxScheduleTimes, boxRepeat } = body

    const data: Record<string, unknown> = {}
    if (name !== undefined) data.name = name
    if (age !== undefined) data.age = Number(age)
    if (gender !== undefined) data.gender = gender as Gender
    if (nationalId !== undefined) data.nationalId = nationalId
    if (departmentId !== undefined) data.departmentId = departmentId
    if (room !== undefined) data.room = room
    if (allergies !== undefined) data.allergies = allergies
    if (notes !== undefined) data.notes = notes
    if (status !== undefined) data.status = status as PatientStatus
    // Fetch current patient state before updating (needed for box logic)
    const existing = boxId !== undefined
      ? await prisma.patient.findUnique({ where: { id }, select: { boxId: true } })
      : null

    let start: Date | undefined
    let end: Date | undefined

    if (boxId !== undefined) {
      data.boxId = boxId ?? null
      if (boxId === null) {
        data.boxStartDate = null
        data.boxEndDate = null
        data.boxDurationDays = null
      }
    }
    if (boxStartDate !== undefined && boxDurationDays !== undefined && boxId) {
      start = new Date(boxStartDate)
      end = new Date(start)
      end.setDate(end.getDate() + Number(boxDurationDays))
      data.boxStartDate = start
      data.boxEndDate = end
      data.boxDurationDays = Number(boxDurationDays)
    }

    const patient = await prisma.patient.update({
      where: { id },
      data,
      include: patientDetail,
    })

    // ── Box assignment side effects ───────────────────────────────────────────

    // Removing box → cancel its assignments for this patient
    if (boxId === null && existing?.boxId) {
      await prisma.medicineAssignment.updateMany({
        where: { patientId: id, boxId: existing.boxId, status: AssignmentStatus.ACTIVE },
        data: { status: AssignmentStatus.CANCELLED },
      })
    }

    // Assigning a new box → cancel old box assignments + create from contents
    if (boxId && boxId !== existing?.boxId && start && end) {
      // Cancel assignments from previous box if switching
      if (existing?.boxId) {
        await prisma.medicineAssignment.updateMany({
          where: { patientId: id, boxId: existing.boxId, status: AssignmentStatus.ACTIVE },
          data: { status: AssignmentStatus.CANCELLED },
        })
      }

      const box = await prisma.box.findUnique({
        where: { id: boxId },
        include: { contents: true },
      })

      if (box && box.contents.length > 0) {
        await prisma.medicineAssignment.createMany({
          data: box.contents.map(c => ({
            patientId: id,
            medicineId: c.medicineId,
            boxId: boxId,
            dosage: c.dosage ?? '',
            administrationMethodOverride: c.administrationMethod ?? null,
            scheduleTimes: boxScheduleTimes ?? [],
            startDate: start!,
            endDate: end!,
            durationDays: Number(boxDurationDays),
            repeat: Boolean(boxRepeat),
            status: AssignmentStatus.ACTIVE,
            notes: c.notes ?? null,
          })),
        })
      }
    }

    return Response.json(patient)
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Patient not found' }, { status: 404 })
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

    await prisma.patient.update({
      where: { id },
      data: { status: PatientStatus.DISCHARGED },
    })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Patient not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
