import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { AdministrationStatus } from '@/app/generated/prisma'

export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth(request)

    const body = await request.json()
    const { assignmentId, patientId, scheduledTime, status, skipReason, notes } = body

    const today = new Date().toISOString().slice(0, 10)
    const scheduledDateTime = new Date(`${today}T${scheduledTime}:00`)
    const administeredAt = status === AdministrationStatus.GIVEN ? new Date() : null

    const existing = await prisma.administrationLog.findFirst({
      where: { assignmentId, scheduledTime: scheduledDateTime },
    })

    const logData = {
      status: status as AdministrationStatus,
      administeredAt,
      skipReason: skipReason ?? null,
      notes: notes ?? null,
    }

    const log = existing
      ? await prisma.administrationLog.update({
          where: { id: existing.id },
          data: logData,
        })
      : await prisma.administrationLog.create({
          data: {
            ...logData,
            assignmentId,
            patientId,
            staffId: user.id,
            scheduledTime: scheduledDateTime,
          },
        })

    return Response.json(log)
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}