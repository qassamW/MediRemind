import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { PatientStatus, Gender } from '@/app/generated/prisma'

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
    const { name, age, gender, nationalId, departmentId, room, allergies, notes, status } = body

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

    const patient = await prisma.patient.update({
      where: { id },
      data,
      include: patientDetail,
    })

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
