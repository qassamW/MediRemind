import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'
import { MedicineType, AssignmentStatus } from '@/app/generated/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    await requireAuth(request)
    const { id } = await params

    const medicine = await prisma.medicine.findUnique({ where: { id } })

    if (!medicine) {
      return Response.json({ error: 'Medicine not found' }, { status: 404 })
    }

    return Response.json(medicine)
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
    const { name, type, administrationMethod, defaultDosage, notes } = body

    const data: Record<string, unknown> = {}
    if (name !== undefined) data.name = name
    if (type !== undefined) data.type = type as MedicineType
    if (administrationMethod !== undefined) data.administrationMethod = administrationMethod
    if (defaultDosage !== undefined) data.defaultDosage = defaultDosage
    if (notes !== undefined) data.notes = notes

    const medicine = await prisma.medicine.update({ where: { id }, data })

    return Response.json(medicine)
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Medicine not found' }, { status: 404 })
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

    const activeCount = await prisma.medicineAssignment.count({
      where: { medicineId: id, status: AssignmentStatus.ACTIVE },
    })

    if (activeCount > 0) {
      return Response.json(
        { error: 'Medicine has active assignments and cannot be deleted' },
        { status: 409 },
      )
    }

    await prisma.medicine.delete({ where: { id } })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Medicine not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}