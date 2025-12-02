// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth";

// export async function GET() {
//   const session = await getServerSession();

//   const user = await prisma.user.findUnique({
//     where: { emial: session?.user?.email || "" },
//   });

//   return NextResponse.json(user);
// }
// import { NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import prisma from "@/lib/prisma";

// export async function GET() {
//   const session = await getServerSession();

//   if (!session?.user?.email)
//     return NextResponse.json({ error: "Not logged in" }, { status: 401 });

//   const user = await prisma.user.findUnique({
//     where: { emial: session.user.email },
//   });

//   return NextResponse.json(user);
// }


// app/api/user/me/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth"; // or wherever your authOptions live

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { emial: session.user.email },
    select: {
      id: true,
      name: true,
      emial: true,
      mobile: true,
      image: true,
      bio: true,
      degree: true,
      branch: true,
      year: true,
      semester: true,
      createdAt: true,
    },
  });

  return NextResponse.json(user);
}
