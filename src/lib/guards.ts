import { UserRole } from "@/app/generated/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

import { authOptions } from "./auth";

type AuthenticatedUser = {
  id: string;
  name?: string | null;
  email?: string | null;
  role: UserRole;
};

export async function requireAuth(_req: Request): Promise<AuthenticatedUser> {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = session.user as Partial<AuthenticatedUser>;

  if (!user.id || !user.role) {
    throw NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return user as AuthenticatedUser;
}

export async function requireAdmin(req: Request): Promise<AuthenticatedUser> {
  const user = await requireAuth(req);

  if (user.role !== UserRole.ADMIN) {
    throw NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  return user;
}
