import { UserRole } from "@/app/generated/prisma";
import type { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import type { JWT } from "next-auth/jwt";
import { compare } from "bcryptjs";

import { prisma } from "./prisma";

type AppJWT = JWT & {
  role?: UserRole;
};

type SessionUserWithRole = NonNullable<Session["user"]> & {
  id: string;
  role: UserRole;
};

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          return null;
        }

        const isPasswordValid = await compare(
          credentials.password,
          user.passwordHash,
        );

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const appToken = token as AppJWT;

      if (user) {
        appToken.sub = user.id;
        appToken.role = (user as unknown as { role: UserRole }).role;
      }

      return appToken;
    },
    async session({ session, token }) {
      if (!session.user) {
        return session;
      }

      const appToken = token as AppJWT;
      const sessionUser = session.user as SessionUserWithRole;

      if (appToken.sub) {
        sessionUser.id = appToken.sub;
      }

      if (appToken.role) {
        sessionUser.role = appToken.role;
      }

      return session;
    },
  },
};
