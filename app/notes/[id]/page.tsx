
// "use client";

// import { use, useEffect, useState } from "react";

// export default function NoteDetails({ params }: any) {
//   // ⬅️ FIX: unwrap the Promise + tell TS the shape
//   const { id } = use(params) as { id: string };

//   const [note, setNote] = useState<any>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await fetch(`/api/note/${id}`);
//         const data = await res.json();

//         if (!data.ok) {
//           setError("Error loading note");
//           return;
//         }

//         setNote(data.data);
//       } catch {
//         setError("Error loading note");
//       }
//     }

//     load();
//   }, [id]);

//   if (error) return <p className="text-red-600">{error}</p>;
//   if (!note) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{note.subject}</h1>

//       {note.blocks.map((b: any) => (
//         <div key={b.id} className="mb-4">
//           {b.type === "heading_1" && <h1 className="text-3xl">{b.text}</h1>}
//           {b.type === "heading_2" && <h2 className="text-2xl">{b.text}</h2>}
//           {b.type === "heading_3" && <h3 className="text-xl">{b.text}</h3>}
//           {b.type === "paragraph" && <p>{b.text}</p>}
//           {b.type === "bulleted_list_item" && (
//             <ul className="list-disc ml-6">
//               <li>{b.text}</li>
//             </ul>
//           )}
//           {b.type === "numbered_list_item" && (
//             <ol className="list-decimal ml-6">
//               <li>{b.text}</li>
//             </ol>
//           )}
//           {b.type === "image" && (
//             <img src={b.url} className="rounded shadow" />
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
// "use client";

// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SubjectPage({ params }: any) {
//   const { id } = use(params) as { id: string };
//   const router = useRouter();

//   const [subject, setSubject] = useState<any>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function load() {
//       const res = await fetch(`/api/subject/${id}`);
//       const data = await res.json();

//       if (!data.ok) {
//         setError("Error loading subject");
//         return;
//       }

//       setSubject(data.data);
//     }

//     load();
//   }, [id]);

//   if (error) return <p className="text-red-600">{error}</p>;
//   if (!subject) return <p className="text-center mt-10">Loading...</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{subject.subjectName}</h1>

//       <h2 className="text-xl font-semibold mb-4">Units</h2>

//       {subject.units.length === 0 && (
//         <p className="text-gray-600">No units added.</p>
//       )}

//       <div className="space-y-4">
//         {subject.units.map((unit: any) => (
//           <div
//             key={unit.id}
//             className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
//             onClick={() => router.push(`/unit/${unit.id}`)}
//           >
//             <h3 className="text-lg font-semibold">
//               Unit {unit.number} — {unit.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// "use client";

// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SubjectPage({ params }: any) {
//   const { id } = use(params) as { id: string };

//   const router = useRouter();

//   const [data, setData] = useState<any>(null);

//   useEffect(() => {
//     async function load() {
//       const res = await fetch(`/api/note/${id}`);
//       const json = await res.json();
//       if (json.ok) setData(json.data);
//     }
//     load();
//   }, [id]);

//   if (!data) return <p>Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{data.subject}</h1>

//       {/* ⭐ UNITS SECTION */}
//       <h2 className="text-2xl font-semibold mb-3">Units</h2>

//       {data.units.length === 0 ? (
//         <p>No units added.</p>
//       ) : (
//         <ul className="space-y-2">
//           {data.units.map((u: any) => (
//             <li
//               key={u.id}
//               className="p-3 border rounded cursor-pointer hover:bg-gray-200"
//               onClick={() => router.push(`/notes/${id}/unit/${u.id}`)}
//             >
//               <strong>Unit {u.number}:</strong> {u.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       <hr className="my-6" />

//       {/* SUBJECT CONTENT */}
//       <h2 className="text-2xl font-semibold mb-3">Content</h2>

//       {data.blocks.map((b: any) => (
//         <div key={b.id} className="mb-3">
//           {b.type === "heading_1" && <h1 className="text-3xl">{b.text}</h1>}
//           {b.type === "heading_2" && <h2 className="text-2xl">{b.text}</h2>}
//           {b.type === "paragraph" && <p>{b.text}</p>}
//         </div>
//       ))}
//     </div>
//   );
// }


// // app/notes/[id]/page.tsx
// "use client";

// import { use, useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// export default function SubjectPage({ params }: any) {
//   // unwrap params Promise (Next.js passes params as a Promise in client)
//   const { id } = use(params) as { id: string };

//   const router = useRouter();
//   const [data, setData] = useState<any>(null);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await fetch(`/api/note/${id}`);
//         const json = await res.json();
//         if (!json.ok) {
//           setError("Error loading subject");
//           return;
//         }
//         setData(json.data);
//       } catch {
//         setError("Network error");
//       }
//     }
//     load();
//   }, [id]);

//   if (error) return <p className="text-red-600 p-6">{error}</p>;
//   if (!data) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">{data.subject}</h1>

//       <h2 className="text-2xl font-semibold mb-3">Units</h2>

//       {(!data.units || data.units.length === 0) ? (
//         <p>No units added.</p>
//       ) : (
//         <ul className="space-y-2">
//           {data.units.map((u: any) => (
//             <li key={u.id} className="p-3 border rounded cursor-pointer hover:bg-gray-200" onClick={() => router.push(`/notes/${id}/unit/${u.id}`)}>
//               <strong>Unit {u.number ?? "?"}:</strong> {u.name}
//             </li>
//           ))}
//         </ul>
//       )}

//       <hr className="my-6" />

//       <h2 className="text-2xl font-semibold mb-3">Content</h2>

//       {data.blocks.map((b: any) => (
//         <div key={b.id} className="mb-3">
//           {b.type === "heading_1" && <h1 className="text-3xl">{b.text}</h1>}
//           {b.type === "heading_2" && <h2 className="text-2xl">{b.text}</h2>}
//           {b.type === "heading_3" && <h3 className="text-xl">{b.text}</h3>}
//           {b.type === "paragraph" && <p>{b.text}</p>}
//           {b.type === "image" && b.url && <img src={b.url} alt="" className="rounded shadow" />}
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function SubjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(`/api/note/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json.data));
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6  transition">

      {/* Title */}
      <h1
        className="text-4xl mt-10 mb-8 font-extrabold text-center text-black dark:text-white mt-30"
        style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
      >
        {data.subject}
      </h1>

      {/* Units Section */}
      <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">
        Available Units
      </h2>

      {data.units.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No units available.
        </p>
      ) : (
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {data.units.map((u: any) => (
            <div
              key={u.id}
              onClick={() => router.push(`/notes/${id}/unit/${u.id}`)}
              className="
                group p-6 bg-white dark:bg-gray-900
                border-2 border-black dark:border-white
                rounded-2xl
                shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#374151]
                hover:shadow-[12px_12px_0_0_#000] dark:hover:shadow-[12px_12px_0_0_#1f2937]
                cursor-pointer transition-all duration-200
                hover:translate-x-[3px] hover:translate-y-[3px]
              "
            >

              {/* ⭐ Unit Title + Beautiful Icon */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-1">
                    Unit {u.number}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {u.name}
                  </p>
                </div>

                {/* ⭐ Right-side Icon with Bubble Background */}
                <div
                  className="
                    w-20 h-15 flex items-center justify-center
                    
                    rounded-lg 
                    border border-gray-300 dark:border-gray-600
                    shadow-md
                    
                  "
                >
                  <Image
                    src="/contact1.svg"  // Your SVG file
                    alt="unit icon"
                    width={240}
                    height={82}
                    className="opacity-90 dark:invert"
                  />
                </div>
              </div>

              {/* Badge */}
              <div
                className="mt-4 inline-block text-xs font-semibold px-3 py-1 
                bg-black text-white dark:bg-white dark:text-black 
                rounded-full shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#fff]"
              >
                Open Unit
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}


