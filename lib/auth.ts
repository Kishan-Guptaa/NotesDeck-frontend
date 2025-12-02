import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import { compare } from "bcryptjs";
import type { NextAuthOptions, User } from "next-auth";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    // ---------------- GOOGLE ----------------
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    // ---------------- EMAIL / PASSWORD ----------------
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        emial: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req): Promise<User | null> {
        if (!credentials?.emial || !credentials.password) return null;

        const user = await prisma.user.findUnique({
          where: { emial: credentials.emial },
        });

        if (!user) throw new Error("User not found");

        const match = await compare(credentials.password, user.password!);
        if (!match) throw new Error("Invalid password");

        return {
          id: String(user.id),
          name: user.name,
          email: user.emial,
          image: user.image ?? undefined,
        };
      },
    }),
  ],

  callbacks: {
    // ---------------- signIn ----------------
    async signIn({
      user,
      account,
    }: {
      user: User;
      account: any;
    }): Promise<boolean> {
      if (account?.provider === "google") {
        const existingUser = await prisma.user.findUnique({
          where: { emial: user.email! },
        });

        if (!existingUser) {
          await prisma.user.create({
            data: {
              name: user.name!,
              emial: user.email!,
              image: user.image || "",
              password: "", // EMPTY STRING FIX (was null)
            //   mobile: "",   // EMPTY STRING FIX (was null)
            },
          });
        }

      }
      // new
      if (account?.provider === "credentials") {
      const existingUser = await prisma.user.findUnique({
        where: { emial: user.email! },
      });

      if (existingUser && !existingUser.image) {
        await prisma.user.update({
          where: { emial: user.email! },
          data: { image: "/default-avatar.png" },  // ← your default avatar
        });
      }
    }


      return true;
    },

    // ---------------- session ----------------
    async session({ session }) {
  if (!session?.user?.email) return session;

  const userDb = await prisma.user.findUnique({
    where: { emial: session.user.email },
  });

  if (userDb) {
    session.user.id = String(userDb.id);

    // KEEP GOOGLE IMAGE (important line)
    session.user.image =
      userDb.image && userDb.image.length > 3
        ? userDb.image
        : session.user.image;
  }

  return session;
}

  },

  pages: {
    signIn: "/signin",
  },
};
