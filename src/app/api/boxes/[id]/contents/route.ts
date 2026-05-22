import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { AssignmentStatus } from '@/app/generated/prisma'

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id: boxId } = await params

    const body = await request.json()
    const { medicineId, dosage, administrationMethod, scheduleTimes, notes } = body

    const content = await prisma.boxContent.create({
      data: {
        boxId,
        medicineId,
        dosage: dosage ?? null,
        administrationMethod: administrationMethod ?? null,
        scheduleTimes: scheduleTimes ?? [],
        notes: notes ?? null,
      },
      include: {
        medicine: { select: { id: true, name: true, type: true } },
      },
    })

    // For any patient currently assigned this box with active dates, create an assignment
    const today = new Date()
    const assignedPatients = await prisma.patient.findMany({
      where: {
        boxId,
        boxStartDate: { lte: today },
        boxEndDate: { gte: today },
      },
      select: { id: true, boxStartDate: true, boxEndDate: true, boxDurationDays: true },
    })

    if (assignedPatients.length > 0) {
      await prisma.medicineAssignment.createMany({
        data: assignedPatients.map(p => ({
          patientId: p.id,
          medicineId,
          boxId,
          dosage: dosage ?? '',
          administrationMethodOverride: administrationMethod ?? null,
          scheduleTimes: scheduleTimes ?? [],
          startDate: p.boxStartDate!,
          endDate: p.boxEndDate!,
          durationDays: p.boxDurationDays ?? 0,
          repeat: false,
          status: AssignmentStatus.ACTIVE,
          notes: notes ?? null,
        })),
      })
    }

    return Response.json(content, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}