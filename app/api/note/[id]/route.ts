
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
// });

// // Helper: extract plain text
// function getRichText(rich: any[]) {
//   return rich?.map((t: any) => t.plain_text).join("") || "";
// }

// // Map each block
// function mapBlock(block: any) {
//   const type = block.type;
//   const data = block[type];

//   const mapped: any = {
//     id: block.id,
//     type,
//     has_children: block.has_children || false,
//   };

//   if (!data) return mapped;

//   if (data.rich_text) mapped.text = getRichText(data.rich_text);

//   if (type === "image") {
//     mapped.url = data.type === "external" ? data.external.url : data.file.url;
//     mapped.caption = getRichText(data.caption);
//   }

//   if (type === "code") {
//     mapped.code = getRichText(data.rich_text);
//     mapped.language = data.language;
//   }

//   return mapped;
// }

// async function fetchChildren(blockId: string) {
//   const res: any = await notion.blocks.children.list({ block_id: blockId });

//   const blocks = res.results.map(mapBlock);

//   for (let i = 0; i < res.results.length; i++) {
//     if (res.results[i].has_children) {
//       blocks[i].children = await fetchChildren(res.results[i].id);
//     }
//   }

//   return blocks;
// }

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     // ❗ FIX — unwrap params promise
//     const { id } = await context.params;

//     if (!id) {
//       return NextResponse.json(
//         { ok: false, error: "Invalid page ID" },
//         { status: 400 }
//       );
//     }

//     const page: any = await notion.pages.retrieve({ page_id: id });

//     const subject = page.properties?.Subject?.title?.[0]?.plain_text || "";

//     const blocks = await fetchChildren(id);

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id,
//         subject,
//         blocks,
//       },
//     });
//   } catch (err: any) {
//     console.error("NOTION PAGE ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({ auth: process.env.NOTION_SECRET });

// function getRichText(rich: any[]) {
//   return rich?.map((t: any) => t.plain_text).join("") || "";
// }

// function mapBlock(block: any) {
//   const mapped: any = {
//     id: block.id,
//     type: block.type,
//     has_children: block.has_children,
//   };

//   const data = block[block.type];

//   if (data?.rich_text) mapped.text = getRichText(data.rich_text);

//   return mapped;
// }

// async function fetchChildren(blockId: string) {
//   const res: any = await notion.blocks.children.list({ block_id: blockId });
//   return res.results.map(mapBlock);
// }

// export async function GET(req: Request, context: { params: { id: string } }) {
//   try {
//     const { id } = context.params;

//     const blocks = await fetchChildren(id);

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id,
//         blocks,
//       },
//     });
//   } catch (err: any) {
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }


// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
// });

// // 👉 Extract rich text
// function getRichText(rich: any[]) {
//   return rich?.map((t: any) => t.plain_text).join("") || "";
// }

// // 👉 Map blocks (heading, paragraph, image)
// function mapBlock(block: any) {
//   const type = block.type;
//   const data = block[type];

//   const mapped: any = {
//     id: block.id,
//     type,
//   };

//   if (data?.rich_text) mapped.text = getRichText(data.rich_text);

//   if (type === "image") {
//     mapped.url = data.type === "external" ? data.external.url : data.file.url;
//   }

//   return mapped;
// }

// // 👉 Load children blocks
// async function fetchChildren(blockId: string) {
//   const res: any = await notion.blocks.children.list({ block_id: blockId });
//   return res.results.map(mapBlock);
// }

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ id: string }> }
// ) {
//   try {
//     const { id } = await context.params;

//     const page: any = await notion.pages.retrieve({
//       page_id: id,
//     });

//     const props = page.properties;

//     // ⭐ Detect Units relation property automatically
//     const unitPropKey = Object.keys(props).find(
//       (key) =>
//         props[key].type === "relation" && key.toLowerCase().includes("unit")
//     );

//     const unitRelations = unitPropKey ? props[unitPropKey].relation : [];

//     // ⭐ Fetch unit pages
//     const units = await Promise.all(
//       unitRelations.map(async (u: any) => {
//         const unitPage: any = await notion.pages.retrieve({
//           page_id: u.id,
//         });

//         return {
//           id: u.id,
//           name:
//             unitPage.properties["Unit Name"]?.title?.[0]?.plain_text ||
//             "Untitled Unit",
//           number: unitPage.properties["Unit Number"]?.number || "",
//         };
//       })
//     );

//     // ⭐ Fetch content of subject page
//     const blocks = await fetchChildren(id);

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id,
//         subject: props["Subject Name"]?.title?.[0]?.plain_text || "",
//         units,
//         blocks,
//       },
//     });
//   } catch (err: any) {
//     console.error("ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }


// // new--
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });

// // Convert rich text
// const getText = (rich: any[]) =>
//   rich?.map((t: any) => t.plain_text).join("") || "";

// // Map Notion blocks
// const mapBlock = (block: any) => {
//   const type = block.type;
//   const data = block[type];
//   const out: any = { id: block.id, type };

//   if (data?.rich_text) out.text = getText(data.rich_text);

//   if (type === "image") {
//     out.url = data.type === "external" ? data.external.url : data.file.url;
//   }

//   return out;
// };

// // Fetch block children
// async function fetchChildren(id: string) {
//   const res = await notion.blocks.children.list({ block_id: id });
//   return res.results.map(mapBlock);
// }

// export async function GET(req: Request, ctx: { params: Promise<{ id: string }> }) {
//   try {
//     const { id } = await ctx.params;

//     // Fetch subject page
//     const page: any = await notion.pages.retrieve({ page_id: id });
//     const props = page.properties;

//     // ✔ Subject TITLE
//     const subjectTitle = props["Subject"]?.title?.[0]?.plain_text || "Untitled";

//     // ✔ Units relation (property name = Units)
//     const relatedUnits = props["Units"]?.relation || [];

//     // Fetch Units from Units DB
//     const units = await Promise.all(
//       relatedUnits.map(async (u: any) => {
//         const unitPage: any = await notion.pages.retrieve({
//           page_id: u.id,
//         });

//         return {
//           id: u.id,
//           name: unitPage.properties["Unit Name"]?.title?.[0]?.plain_text || "",
//           number: unitPage.properties["Unit Number"]?.number || "",
//         };
//       })
//     );

//     // Fetch blocks content
//     const blocks = await fetchChildren(id);

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id,
//         subject: subjectTitle,
//         units,
//         blocks,
//       },
//     });

//   } catch (err: any) {
//     console.log("SUBJECT ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const DB_ID = process.env.NOTION_DB_ID!;

const text = (r: any[]) =>
  r?.map((x: any) => x.plain_text).join("") || "";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // FIXED

    const page: any = await notion.pages.retrieve({
      page_id: id,
    });

    const subjectName =
      text(page.properties["Subject"]?.title) ||
      text(page.properties["Subject Name"]?.title) ||
      "Untitled";

    const unitsRes = await notion.databases.query({
      database_id: DB_ID,
      filter: {
        and: [
          { property: "Page Type", select: { equals: "Unit" } },
          { property: "Parent Subject", relation: { contains: id } },
        ],
      },
      sorts: [{ property: "Unit Number", direction: "ascending" }],
    });

    const units = unitsRes.results.map((u: any) => ({
      id: u.id,
      name: text(u.properties["Subject"]?.title),
      number: u.properties["Unit Number"]?.number,
    }));

    return NextResponse.json({
      ok: true,
      data: { subject: subjectName, units },
    });
  } catch (err: any) {
    console.log("NOTE ERROR:", err);
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
