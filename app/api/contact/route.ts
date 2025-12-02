import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        await resend.emails.send({
            from: "NotesDeck <onboarding@resend.dev>",
            to: process.env.OWNER_EMAIL!,
            subject: "New Contact Message - NotesDeck",
            html: `
                <h2>New Message Received</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.log("Email error:", error);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
