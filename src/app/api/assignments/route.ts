import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { AssignmentStatus } from '@/app/generated/prisma'

export async function POST(request: NextRequest) {
  try {
    await requireAuth(request)

    const body = await request.json()
    const {
      patientId,
      medicineId,
      boxId,
      dosage,
      administrationMethodOverride,
      scheduleTimes,
      startDate,
      durationDays,
      repeat,
      notes,
    } = body

    if (boxId) {
      const patient = await prisma.patient.findUnique({ where: { id: patientId } })
      if (!patient || patient.boxId !== boxId) {
        return Response.json(
          { error: 'Box is not assigned to this patient' },
          { status: 400 },
        )
      }
    }

    const start = new Date(startDate)
    const end = new Date(start)
    end.setDate(end.getDate() + Number(durationDays))

    const assignment = await prisma.medicineAssignment.create({
      data: {
        patientId,
        medicineId,
        boxId: boxId ?? null,
        dosage,
        administrationMethodOverride: administrationMethodOverride ?? null,
        scheduleTimes: scheduleTimes ?? [],
        startDate: start,
        endDate: end,
        durationDays: Number(durationDays),
        repeat: Boolean(repeat),
        status: AssignmentStatus.ACTIVE,
        notes: notes ?? null,
      },
      include: { medicine: true },
    })

    return Response.json(assignment, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}