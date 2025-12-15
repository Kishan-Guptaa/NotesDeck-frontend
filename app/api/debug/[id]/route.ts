import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
});

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    const page = await notion.pages.retrieve({ page_id: id });

    return NextResponse.json(page);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
