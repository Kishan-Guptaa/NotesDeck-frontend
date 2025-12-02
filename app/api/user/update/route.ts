// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth";

// export async function POST(req: Request) {
//   const body = await req.json();
//   const session = await getServerSession();

//   const updated = await prisma.user.update({
//     where: { emial: session?.user?.email || "" },
//     data: body,
//   });

//   return NextResponse.json(updated);
// }
// import { NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import { getServerSession } from "next-auth";

// export async function POST(req: Request) {
//   const session = await getServerSession();
//   const body = await req.json();

//   if (!session?.user?.email)
//     return NextResponse.json({ error: "Not logged in" }, { status: 401 });

//   const updated = await prisma.user.update({
//     where: { emial: session.user.email },
//     data: body,
//   });

//   return NextResponse.json(updated);
// }


// app/api/user/update/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/auth"; // adjust path if needed

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const body = await req.json();

  // sanitize/convert numeric fields
  const year = body.year === "" || body.year == null ? null : Number(body.year);
  const semester =
    body.semester === "" || body.semester == null ? null : Number(body.semester);

  const dataToUpdate: any = {
    name: body.name ?? undefined,
    mobile: body.mobile ?? undefined,
    bio: body.bio ?? undefined,
    degree: body.degree ?? null,
    branch: body.branch ?? null,
    year,
    semester,
    image: body.image ?? undefined,
  };

  // remove undefined keys so Prisma won't try to set them
  Object.keys(dataToUpdate).forEach(
    (k) => dataToUpdate[k] === undefined && delete dataToUpdate[k]
  );

  try {
    const updated = await prisma.user.update({
      where: { emial: session.user.email },
      data: dataToUpdate,
    });

    // return updated user (select fields you want to expose)
    const safeUser = {
      id: updated.id,
      name: updated.name,
      emial: updated.emial,
      mobile: updated.mobile,
      image: updated.image,
      bio: updated.bio,
      degree: updated.degree,
      branch: updated.branch,
      year: updated.year,
      semester: updated.semester,
    };

    return NextResponse.json(safeUser);
  } catch (err: any) {
    console.error("Update user error:", err);
    return NextResponse.json({ error: "Update failed" }, { status: 500 });
  }
}
