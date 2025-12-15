
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
// });

// const databaseId = process.env.NOTION_DB_ID!;

// export async function POST(req: Request) {
//   try {
//     const { stream, year, semester } = await req.json();

//     const filters: any[] = [];

//     if (stream) {
//       filters.push({
//         property: "Stream",
//         select: { equals: stream },
//       });
//     }

//     if (year) {
//       filters.push({
//         property: "Year",
//         select: { equals: year },
//       });
//     }

//     if (semester) {
//       filters.push({
//         property: "Semester",
//         number: { equals: Number(semester) },
//       });
//     }

//     const response = await notion.databases.query({
//       database_id: databaseId,
//       filter: { and: filters },
//     });

//     const items = response.results.map((page: any) => ({
//       id: page.id,
//       url: page.url,
//       subject: page.properties?.Subject?.title?.[0]?.plain_text || "",
//       stream: page.properties?.Stream?.select?.name || "",
//       semester: page.properties?.Semester?.number || null,
//       year: page.properties?.Year?.select?.name || "",
//     }));

//     return NextResponse.json({ ok: true, data: items });
//   } catch (err: any) {
//     console.error("NOTION ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }


// // new--
// // app/api/notes/route.ts
// import { NextResponse } from "next/server";
// import { Client } from "@notionhq/client";

// const notion = new Client({
//   auth: process.env.NOTION_SECRET || process.env.NOTION_TOKEN,
// });

// const databaseId = process.env.NOTION_DB_ID!;

// export async function POST(req: Request) {
//   try {
//     const { stream, year, semester } = await req.json();

//     const filters: any[] = [];

//     if (stream) {
//       filters.push({
//         property: "Stream",
//         select: { equals: stream },
//       });
//     }

//     if (year) {
//       filters.push({
//         property: "Year",
//         select: { equals: year },
//       });
//     }

//     if (semester) {
//       filters.push({
//         property: "Semester",
//         number: { equals: Number(semester) },
//       });
//     }

//     const response = await notion.databases.query({
//       database_id: databaseId,
//       filter: { and: filters },
//     });

//     const items = response.results.map((page: any) => ({
//       id: page.id,
//       url: page.url,
//       subject: page.properties?.["Subject Name"]?.title?.[0]?.plain_text || "",
//       stream: page.properties?.Stream?.select?.name || "",
//       semester: page.properties?.Semester?.number || null,
//       year: page.properties?.Year?.select?.name || "",
//     }));

//     return NextResponse.json({ ok: true, data: items });
//   } catch (err: any) {
//     console.error("NOTION ERROR:", err);
//     return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET,
});

const DB_ID = process.env.NOTION_DB_ID!;

export async function POST(req: Request) {
  try {
    const { stream, year, semester } = await req.json();

    const filters: any[] = [
      {
        property: "Page Type",
        select: { equals: "Subject" },
      },
    ];

    if (stream) {
      filters.push({
        property: "Stream",
        select: { equals: stream },
      });
    }

    if (year) {
      filters.push({
        property: "Year",
        select: { equals: year },
      });
    }

    if (semester) {
      filters.push({
        property: "Semester",
        number: { equals: Number(semester) },
      });
    }

    const res = await notion.databases.query({
      database_id: DB_ID,
      filter: { and: filters },
    });

      const subjects = res.results.map((page: any) => {
        const props = page.properties;

        return {
          id: page.id,

          subject:
            props["Subject"]?.title?.[0]?.plain_text ||
            props["Subject Name"]?.title?.[0]?.plain_text ||
            "Untitled",

          stream: props.Stream?.select?.name || "",
          year: props.Year?.select?.name || "",
          semester: props.Semester?.number || null,

          // Credits handling — supports multiple possible names
          credits:
            props["Credits"]?.number ??
            props["Credit"]?.number ??
            props["Credit Hours"]?.number ??
            props["Course Credits"]?.number ??
            null,

          // Type handling — supports multiple possible names
          type:
            props["Type"]?.select?.name ||
            props["Subject Type"]?.select?.name ||
            props["Category"]?.select?.name ||
            "",
        };
      });


    return NextResponse.json({ ok: true, data: subjects });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message }, { status: 500 });
  }
}
