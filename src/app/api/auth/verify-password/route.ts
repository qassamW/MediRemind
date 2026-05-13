import { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import { compare } from 'bcryptjs'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session?.user?.email) {
      return Response.json({ verified: false }, { status: 401 })
    }

    const { password } = await request.json()

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    })

    if (!user) {
      return Response.json({ verified: false })
    }

    const verified = await compare(password, user.passwordHash)

    return Response.json({ verified })
  } catch (err) {
    console.error(err)
    return Response.json({ verified: false }, { status: 500 })
  }
}