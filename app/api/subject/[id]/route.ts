import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // Fetch subject page
    const page: any = await notion.pages.retrieve({
      page_id: id,
    });

    const subjectName =
      page.properties["Subject Name"]?.title?.[0]?.plain_text || "";

    const relatedUnits = page.properties["Units"]?.relation || [];

    // Fetch all unit pages
    const units = [];
    for (const unit of relatedUnits) {
      const unitPage: any = await notion.pages.retrieve({
        page_id: unit.id,
      });

      units.push({
        id: unit.id,
        name: unitPage.properties["Unit Name"]?.title?.[0]?.plain_text || "",
        number: unitPage.properties["Unit Number"]?.number || null,
      });
    }

    return NextResponse.json({
      ok: true,
      data: {
        id,
        subjectName,
        units,
      },
    });
  } catch (err: any) {
    console.log("SUBJECT ERROR:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
