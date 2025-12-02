import { NextResponse } from "next/server";
import cloudinary from "@/utils/cloudinary";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function POST(req: Request) {
  const session = await getServerSession();
  if (!session?.user?.email)
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });

  const form = await req.formData();
  const file = form.get("file") as File;
  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const buffer = Buffer.from(await file.arrayBuffer());

  const upload = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({ folder: "notesdeck" }, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      })
      .end(buffer);
  });

  await prisma.user.update({
    where: { emial: session.user.email },
    data: { image: upload.secure_url },
  });

  return NextResponse.json({ url: upload.secure_url });
}
