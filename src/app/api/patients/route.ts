import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { PatientStatus, Gender } from '@/app/generated/prisma'

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request)

    const { searchParams } = request.nextUrl
    const statusParam = searchParams.get('status') ?? 'ADMITTED'
    const departmentId = searchParams.get('departmentId')

    const where: Record<string, unknown> = {}

    if (statusParam !== 'all') {
      where.status = statusParam as PatientStatus
    }

    if (departmentId) {
      where.departmentId = departmentId
    }

    const patients = await prisma.patient.findMany({
      where,
      include: { department: true, box: true },
      orderBy: { name: 'asc' },
    })

    return Response.json(patients)
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
    const { name, age, gender, nationalId, departmentId, room, allergies, notes } = body

    const patient = await prisma.patient.create({
      data: {
        name,
        age: Number(age),
        gender: gender as Gender,
        nationalId,
        departmentId: departmentId ?? null,
        room: room ?? null,
        allergies: allergies ?? [],
        notes: notes ?? null,
        status: PatientStatus.ADMITTED,
      },
      include: { department: true, box: true },
    })

    return Response.json(patient, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2002'
    ) {
      return Response.json({ error: 'National ID already exists' }, { status: 409 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
