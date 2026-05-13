import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { MedicineType } from '@/app/generated/prisma'

export async function GET(request: NextRequest) {
  try {
    await requireAuth(request)

    const medicines = await prisma.medicine.findMany({
      orderBy: { name: 'asc' },
    })

    return Response.json(medicines)
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
    const { name, type, administrationMethod, defaultDosage, notes } = body

    const medicine = await prisma.medicine.create({
      data: {
        name,
        type: type as MedicineType,
        administrationMethod,
        defaultDosage: defaultDosage ?? null,
        notes: notes ?? null,
      },
    })

    return Response.json(medicine, { status: 201 })
  } catch (err) {
    if (err instanceof Response) return err
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}