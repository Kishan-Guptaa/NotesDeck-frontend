import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, emial, password, mobile } = await req.json();

    if (!name || !emial || !password || !mobile) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const userExists = await prisma.user.findUnique({
      where: { emial },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        name,
        emial,
        password: hashedPassword,
        mobile,
      },
    });

    return NextResponse.json({
      message: "Signup successful",
      user: { id: newUser.id, name: newUser.name, emial: newUser.emial },
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
