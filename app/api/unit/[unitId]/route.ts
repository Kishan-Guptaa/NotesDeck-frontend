// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
// });

// function getRichText(rich: any[]) {
//   return rich?.map((t: any) => t.plain_text).join("") || "";
// }

// function mapBlock(block: any) {
//   const type = block.type;
//   const data = block[type];

//   const mapped: any = { id: block.id, type };

//   if (data?.rich_text) mapped.text = getRichText(data.rich_text);

//   if (type === "image") {
//     mapped.url = data.type === "external" ? data.external.url : data.file.url;
//   }

//   return mapped;
// }

// async function fetchChildren(blockId: string) {
//   const res: any = await notion.blocks.children.list({ block_id: blockId });
//   return res.results.map(mapBlock);
// }

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ unitId: string }> }
// ) {
//   try {
//     const { unitId } = await context.params;

//     const unit: any = await notion.pages.retrieve({ page_id: unitId });

//     const name =
//       unit.properties["Unit Name"]?.title?.[0]?.plain_text || "Untitled Unit";

//     const blocks = await fetchChildren(unitId);

//     return NextResponse.json({
//       ok: true,
//       data: { id: unitId, name, blocks },
//     });
//   } catch (err: any) {
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }


// new--
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });

// const getText = (rich: any[]) =>
//   rich?.map((x) => x.plain_text).join("") || "";

// const mapBlock = (b: any) => {
//   const t = b.type;
//   const d = b[t];
//   const out: any = { id: b.id, type: t };
//   if (d?.rich_text) out.text = getText(d.rich_text);
//   return out;
// };

// async function fetchChildren(id: string) {
//   const res = await notion.blocks.children.list({ block_id: id });
//   return res.results.map(mapBlock);
// }

// export async function GET(req: Request, ctx: { params: Promise<{ unitId: string }> }) {
//   try {
//     const { unitId } = await ctx.params;

//     const page: any = await notion.pages.retrieve({ page_id: unitId });

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id: unitId,
//         name: page.properties["Unit Name"]?.title?.[0]?.plain_text || "",
//         number: page.properties["Unit Number"]?.number || "",
//         blocks: await fetchChildren(unitId),
//       },
//     });

//   } catch (err: any) {
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }


// // date-10
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });

// const getText = (rich: any[]) =>
//   rich?.map((x) => x.plain_text).join("") || "";

// const mapBlock = (b: any) => {
//   const t = b.type;
//   const d = b[t];
//   const out: any = { id: b.id, type: t };
//   if (d?.rich_text) out.text = getText(d.rich_text);

//   if (t === "image") {
//     out.url =
//       d.type === "external" ? d.external.url : d.file.url;
//   }
//   return out;
// };

// async function fetchChildren(id: string) {
//   const res = await notion.blocks.children.list({ block_id: id });
//   return res.results.map(mapBlock);
// }

// export async function GET(
//   req: Request,
//   { params }: { params: { unitId: string } }
// ) {
//   try {
//     const { unitId } = params;

//     const page: any = await notion.pages.retrieve({
//       page_id: unitId,
//     });

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id: unitId,
//         name:
//           page.properties["Unit Name"]?.title?.[0]?.plain_text ||
//           "",
//         number: page.properties["Unit Number"]?.number || "",
//         blocks: await fetchChildren(unitId),
//       },
//     });
//   } catch (err: any) {
//     return NextResponse.json(
//       { ok: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });

// const text = (r: any[]) =>
//   r?.map((x: any) => x.plain_text).join("") || "";

// const mapBlock = (b: any) => {
//   const type = b.type;
//   const data = b[type];
//   return {
//     id: b.id,
//     type,
//     text: data?.rich_text ? text(data.rich_text) : "",
//   };
// };

// export async function GET(
//   req: Request,
//   context: { params: Promise<{ unitId: string }> }
// ) {
//   try {
//     const { unitId } = await context.params;

//     const page: any = await notion.pages.retrieve({
//       page_id: unitId,
//     });

//     const blocksRes = await notion.blocks.children.list({
//       block_id: unitId,
//     });

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id: unitId,
//         name: text(page.properties["Subject"]?.title),
//         number: page.properties["Unit Number"]?.number,
//         blocks: blocksRes.results.map(mapBlock),
//       },
//     });
//   } catch (err: any) {
//     console.log("UNIT ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET,
// });

// const getText = (rich: any[]) =>
//   rich?.map((t) => t.plain_text).join("") || "";

// const mapBlock = (block: any) => {
//   const type = block.type;
//   const data = block[type];
//   const out: any = { id: block.id, type };

//   if (data?.rich_text) {
//     out.text = getText(data.rich_text);
//   }

//   return out;
// };

// // ✅ FETCH ALL BLOCKS (NO LIMIT)
// async function fetchAllBlocks(blockId: string) {
//   let allBlocks: any[] = [];
//   let cursor: string | undefined = undefined;

//   while (true) {
//     const res = await notion.blocks.children.list({
//       block_id: blockId,
//       start_cursor: cursor,
//       page_size: 100,
//     });

//     allBlocks.push(...res.results);

//     if (!res.has_more) break;
//     cursor = res.next_cursor ?? undefined;
//   }

//   return allBlocks;
// }

// export async function GET(
//   req: Request,
//   ctx: { params: Promise<{ unitId: string }> }
// ) {
//   try {
//     // ✅ VERY IMPORTANT: unwrap params
//     const { unitId } = await ctx.params;

//     if (!unitId) {
//       throw new Error("unitId missing in route params");
//     }

//     const page: any = await notion.pages.retrieve({
//       page_id: unitId,
//     });

//     const rawBlocks = await fetchAllBlocks(unitId);
//     const blocks = rawBlocks.map(mapBlock);

//     return NextResponse.json({
//       ok: true,
//       data: {
//         id: unitId,
//         name:
//           page.properties["Unit Name"]?.title?.[0]?.plain_text ||
//           page.properties["Subject"]?.title?.[0]?.plain_text ||
//           "Untitled",
//         number: page.properties["Unit Number"]?.number || null,
//         blocks,
//       },
//     });
//   } catch (err: any) {
//     console.error("UNIT API ERROR:", err);
//     return NextResponse.json(
//       { ok: false, error: err.message },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const getText = (rich: any[]) =>
  rich?.map((t) => t.plain_text).join("") || "";

/* ---------------- MAP BLOCK (EXTENDED ONLY) ---------------- */
const mapBlock = async (block: any) => {
  const type = block.type;
  const data = block[type];
  const out: any = { id: block.id, type };

  // TEXT BASED BLOCKS (UNCHANGED)
  if (
    data?.rich_text &&
    (
      type === "paragraph" ||
      type === "heading_1" ||
      type === "heading_2" ||
      type === "heading_3" ||
      type === "bulleted_list_item" ||
      type === "numbered_list_item"
    )
  ) {
    out.text = getText(data.rich_text);
    return out;
  }

  // IMAGE
  if (type === "image") {
    out.url =
      block.image.type === "external"
        ? block.image.external.url
        : block.image.file.url;
    return out;
  }

  // EQUATION BLOCK
  if (type === "equation") {
    out.expression = block.equation.expression;
    return out;
  }

  // CODE BLOCK
  if (type === "code") {
    out.code = getText(block.code.rich_text);
    out.language = block.code.language;
    return out;
  }

  // TABLE
  if (type === "table") {
    const rowsRes = await notion.blocks.children.list({
      block_id: block.id,
    });

    out.rows = rowsRes.results.map((row: any) => ({
      cells: row.table_row.cells.map((cell: any[]) =>
        cell.map((t) => t.plain_text).join("")
      ),
    }));
    return out;
  }

  return out;
};

// ✅ FETCH ALL BLOCKS (UNCHANGED)
async function fetchAllBlocks(blockId: string) {
  let allBlocks: any[] = [];
  let cursor: string | undefined;

  while (true) {
    const res = await notion.blocks.children.list({
      block_id: blockId,
      start_cursor: cursor,
      page_size: 100,
    });

    allBlocks.push(...res.results);
    if (!res.has_more) break;
    cursor = res.next_cursor ?? undefined;
  }

  return allBlocks;
}

export async function GET(
  req: Request,
  ctx: { params: Promise<{ unitId: string }> }
) {
  try {
    const { unitId } = await ctx.params;

    const page: any = await notion.pages.retrieve({
      page_id: unitId,
    });

    const rawBlocks = await fetchAllBlocks(unitId);
    const blocks = await Promise.all(rawBlocks.map(mapBlock));

    return NextResponse.json({
      ok: true,
      data: {
        id: unitId,
        name:
          page.properties["Unit Name"]?.title?.[0]?.plain_text ||
          page.properties["Subject"]?.title?.[0]?.plain_text ||
          "Untitled",
        number: page.properties["Unit Number"]?.number || null,
        blocks,
      },
    });
  } catch (err: any) {
    console.error("UNIT API ERROR:", err);
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 }
    );
  }
}
