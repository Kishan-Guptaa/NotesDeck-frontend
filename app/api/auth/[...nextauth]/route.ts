
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import type { AuthOptions, Session, User } from "next-auth";
// import type { JWT } from "next-auth/jwt";

// import prisma from "@/lib/prisma";
// import bcrypt from "bcryptjs";

// export const authOptions: AuthOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),

//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         emial: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(
//         credentials: Record<string, string> | undefined
//       ): Promise<any> {
//         if (!credentials?.emial || !credentials.password) {
//           throw new Error("Missing email or password");
//         }

//         const user = await prisma.user.findUnique({
//           where: { emial: credentials.emial },
//         });

//         if (!user) throw new Error("User not found");

//         const valid = await bcrypt.compare(credentials.password, user.password);
//         if (!valid) throw new Error("Invalid password");

//         return user;
//       },
//     }),
//   ],

//   session: {
//     strategy: "jwt" as const, // <── IMPORTANT FIX
//   },

//   callbacks: {
//     async signIn({
//       user,
//       account,
//     }: {
//       user: User;
//       account: any;
//     }) {
//       // Auto-create DB user when first Google login
//       if (account?.provider === "google") {
//         const existing = await prisma.user.findUnique({
//           where: { emial: user.email! },
//         });

//         if (!existing) {
//           await prisma.user.create({
//             data: {
//               name: user.name || "",
//               emial: user.email!,
//               password: "",
//               mobile: "",
//             },
//           });
//         }
//       }

//       return true;
//     },

//     async jwt({
//       token,
//       user,
//     }: {
//       token: JWT;
//       user?: User;
//     }) {
//       if (user) token.id = (user as any).id;
//       return token;
//     },

//     async session({
//       session,
//       token,
//     }: {
//       session: Session;
//       token: JWT;
//     }) {
//       if (session.user) {
//         (session.user as any).id = token.id;
//       }
//       return session;
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET!,
// };

// const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
