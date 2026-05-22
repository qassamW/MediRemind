import { NextRequest } from 'next/server'
import { prisma } from '@/lib/prisma'
import { requireAuth } from '@/lib/guards'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string; contentId: string }> },
) {
  try {
    await requireAuth(request)
    const { contentId } = await params

    await prisma.boxContent.delete({ where: { id: contentId } })

    return Response.json({ success: true })
  } catch (err) {
    if (err instanceof Response) return err
    if (
      typeof err === 'object' && err !== null &&
      'code' in err && (err as { code: string }).code === 'P2025'
    ) {
      return Response.json({ error: 'Content not found' }, { status: 404 })
    }
    console.error(err)
    return Response.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}