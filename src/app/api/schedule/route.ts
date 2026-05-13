import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { AssignmentStatus, PatientStatus } from '@/app/generated/prisma'
import type { ScheduleItem, ScheduleItemStatus } from '@/types'

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request)

    const { searchParams } = request.nextUrl
    const dateStr = searchParams.get('date') ?? new Date().toISOString().slice(0, 10)
    const departmentId = searchParams.get('departmentId')
    const patientIdFilter = searchParams.get('patientId')

    const dateStart = new Date(`${dateStr}T00:00:00`)
    const dateEnd = new Date(`${dateStr}T23:59:59.999`)

    const assignments = await prisma.medicineAssignment.findMany({
      where: {
        status: AssignmentStatus.ACTIVE,
        startDate: { lte: dateEnd },
        endDate: { gte: dateStart },
        patient: {
          status: PatientStatus.ADMITTED,
          ...(departmentId ? { departmentId } : {}),
          ...(patientIdFilter ? { id: patientIdFilter } : {}),
        },
      },
      include: {
        medicine: { select: { name: true, administrationMethod: true } },
        patient: { select: { id: true, name: true, room: true } },
      },
    })

    const assignmentIds = assignments.map(a => a.id)

    const logs = assignmentIds.length > 0
      ? await prisma.administrationLog.findMany({
          where: {
            assignmentId: { in: assignmentIds },
            scheduledTime: { gte: dateStart, lte: dateEnd },
          },
        })
      : []

    // key: `${assignmentId}_${scheduledTime.getTime()}`
    const logMap = new Map<string, typeof logs[number]>()
    for (const log of logs) {
      logMap.set(`${log.assignmentId}_${log.scheduledTime.getTime()}`, log)
    }

    const nowMinus30ms = Date.now() - 30 * 60 * 1000
    const items: ScheduleItem[] = []

    for (const assignment of assignments) {
      for (const time of assignment.scheduleTimes) {
        const scheduledDateTime = new Date(`${dateStr}T${time}:00`)
        const log = logMap.get(`${assignment.id}_${scheduledDateTime.getTime()}`)

        let status: ScheduleItemStatus
        if (log) {
          status = log.status.toLowerCase() as ScheduleItemStatus
        } else if (scheduledDateTime.getTime() < nowMinus30ms) {
          status = 'overdue'
        } else {
          status = 'pending'
        }

        items.push({
          assignmentId: assignment.id,
          patientId: assignment.patient.id,
          patientName: assignment.patient.name,
          room: assignment.patient.room,
          medicineName: assignment.medicine.name,
          dosage: assignment.dosage,
          administrationMethod:
            assignment.administrationMethodOverride ??
            assignment.medicine.administrationMethod ??
            '',
          scheduledTime: time,
          status,
          logId: log?.id ?? null,
          skipReason: log?.skipReason ?? null,
        })
      }
    }

    items.sort((a, b) => a.scheduledTime.localeCompare(b.scheduledTime))

    return Response.json(items)
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}