

// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function NotesPage() {
//   const router = useRouter();

//   const [stream, setStream] = useState("CSE-Core");
//   const [year, setYear] = useState("1st Year");
//   const [semester, setSemester] = useState("1");

//   const [subjects, setSubjects] = useState<any[]>([]);
//   const [error, setError] = useState("");

//   const searchSubjects = async () => {
//     setError("");

//     const res = await fetch("/api/notes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ stream, year, semester }),
//     });

//     const data = await res.json();

//     if (!data.ok) {
//       setError("Error loading subjects");
//       return;
//     }

//     setSubjects(data.data);
//   };

//   return (
//     <div className="max-w-3xl mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6 text-center">Find Your Subjects</h1>

//       {/* Stream */}
//       <select
//         className="w-full p-3 border rounded mb-3"
//         value={stream}
//         onChange={(e) => setStream(e.target.value)}
//       >
//         <option value="CSE-Core">CSE-Core</option>
//         <option value="CSE-AI">CSE-AI</option>
//         <option value="CSE-ML">CSE-ML</option>
//       </select>

//       {/* Year */}
//       <select
//         className="w-full p-3 border rounded mb-3"
//         value={year}
//         onChange={(e) => setYear(e.target.value)}
//       >
//         <option>1st Year</option>
//         <option>2nd Year</option>
//         <option>3rd Year</option>
//         <option>4th Year</option>
//       </select>

//       {/* Semester */}
//       <select
//         className="w-full p-3 border rounded mb-3"
//         value={semester}
//         onChange={(e) => setSemester(e.target.value)}
//       >
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//       </select>

//       <button
//         onClick={searchSubjects}
//         className="px-4 py-2 bg-blue-600 text-white rounded"
//       >
//         Search
//       </button>

//       {error && <p className="text-red-600 mt-4">{error}</p>}

//       {/* Results */}
//       <div className="mt-6">
//         {subjects.length === 0 ? (
//           <p className="text-gray-600">No subjects found.</p>
//         ) : (
//           <ul className="space-y-4">
//             {subjects.map((sub) => (
//               <li
//                 key={sub.id}
//                 className="p-4 border rounded hover:bg-gray-100 cursor-pointer"
//                 onClick={() => router.push(`/notes/${sub.id}`)}
//               >
//                 <h2 className="text-lg font-semibold">{sub.subject}</h2>
//                 <p className="text-sm text-gray-600">
//                   Semester {sub.semester} • {sub.year}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
// app/notes/page.tsx
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function NotesPage() {
//   const router = useRouter();

//   const [stream, setStream] = useState("CSE-Core");
//   const [year, setYear] = useState("1st Year");
//   const [semester, setSemester] = useState("1");
//   const [subjects, setSubjects] = useState<any[]>([]);
//   const [error, setError] = useState("");

//   const searchSubjects = async () => {
//     setError("");
//     setSubjects([]);

//     try {
//       const res = await fetch("/api/notes", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ stream, year, semester }),
//       });

//       const data = await res.json();
//       if (!data.ok) {
//         setError("Error loading subjects");
//         return;
//       }
//       setSubjects(data.data);
//     } catch {
//       setError("Network error");
//     }
//   };

//   return (
//     <div className="
//       min-h-screen 
//       p-6 
//       bg-gray-200 dark:bg-black 
//       transition
//     ">
      
      
//       <h1 className="text-4xl mt-15 font-extrabold text-center mb-10 text-gray-900 dark:text-white">
//         Find Your Subjects
//       </h1>

      
//       <div className="
//         max-w-2xl mx-auto 
//         bg-white dark:bg-gray-800
//         border-2 border-black
//         dark:border-gray-600
//         rounded-lg 
//         shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151]
//         p-8 
//         transition
//       ">
        
        
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

//           <select
//             className="
//               p-3 rounded-md
//               bg-gray-100 dark:bg-black/80 
//               text-gray-900 dark:text-white 
//               border border-black
//               shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#ffffff]
//             "
//             value={stream}
//             onChange={(e) => setStream(e.target.value)}
//           >
//             <option value="CSE-Core">CSE-Core</option>
//             <option value="CSE-AI">Data Science</option>
//             <option value="CSE-ML">Cyber Security</option>
//             <option value="CSE-Core">Artificial Intelligence</option>
//             <option value="CSE-AI">Mechanical Eng</option>
//             <option value="CSE-ML">Civil Eng</option>
//             <option value="CSE-Core">ECE Eng</option>
//             <option value="CSE-AI">Electrical Eng</option>
            
//           </select>

//           <select
//             className="
//               p-3 rounded-md
//               bg-gray-100 dark:bg-black/80
//               text-gray-900 dark:text-white 
//               border border-black
//               shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#ffffff]
//             "
//             value={year}
//             onChange={(e) => setYear(e.target.value)}
//           >
//             <option>1st Year</option>
//             <option>2nd Year</option>
//             <option>3rd Year</option>
//             <option>4th Year</option>
//           </select>

//           <select
//             className="
//               p-3 rounded-md
//               bg-gray-100 dark:bg-black/80
//               text-gray-900 dark:text-white 
//               border border-black
//               shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#ffffff]
//             "
//             value={semester}
//             onChange={(e) => setSemester(e.target.value)}
//           >
//             <option value="1">Semester 1</option>
//             <option value="2">Semester 2</option>
//             <option value="3">Semester 3</option>
//             <option value="4">Semester 4</option>
//             <option value="1">Semester 5</option>
//             <option value="2">Semester 6</option>
//             <option value="3">Semester 7</option>
//             <option value="4">Semester 8</option>
//           </select>

//         </div>

       
//         <div className="mt-8 flex justify-center">
//           <button
//             onClick={searchSubjects}
//             className="
//               px-6 py-2 
//               bg-white dark:bg-black
//               text-black dark:text-white 
              
//               border-2 border-black
//               rounded-lg
//               shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#ffffff]
//               font-semibold 
//               hover:translate-x-[2px] hover:translate-y-[2px] 
//               hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[3px_3px_0_#ffffff]
//               transition-all
//             "
//           >
//             Search
//           </button>
//         </div>

//         {error && (
//           <p className="text-red-500 text-center mt-4">{error}</p>
//         )}
//       </div>

      
//       <div className="max-w-3xl mx-auto mt-10 space-y-4">
//         {subjects.length === 0 ? (
//           <p className="text-center text-gray-700 dark:text-gray-300">No subjects found.</p>
//         ) : (
//           subjects.map((sub) => (
//             <div
//               key={sub.id}
//               onClick={() => router.push(`/notes/${sub.id}`)}
//               className="
//                 p-6 bg-white dark:bg-gray-700
//                 border-2 border-white 
//                 rounded-xl 
//                 shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#ffffff]
//                 cursor-pointer 
//                 transition-all 
//                 hover:translate-x-1 hover:translate-y-1 
//                 hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#ffffff]
//               "
//             >
//               <h2 className="text-xl font-bold text-gray-900 dark:text-white">
//                 {sub.subject}
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 text-sm">
//                 Semester {sub.semester} • {sub.year}
//               </p>
//             </div>
//           ))
//         )}
//       </div>

//     </div>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export default function NotesPage() {
  const router = useRouter();

  const [stream, setStream] = useState("CSE-Core");
  const [year, setYear] = useState("1st Year");
  const [semester, setSemester] = useState("1");
  const [subjects, setSubjects] = useState<any[]>([]);
  const [error, setError] = useState("");

  const searchSubjects = async () => {
    setError("");
    setSubjects([]);

    try {
      const res = await fetch("/api/notes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ stream, year, semester }),
      });

      const data = await res.json();
      if (!data.ok) {
        setError("Error loading subjects");
        return;
      }
      setSubjects(data.data);
    } catch {
      setError("Network error");
    }
  };

  return (
    <div className="min-h-screen p-6 bg-white dark:bg-black transition mt-10">
       <Link
        href="/"
        className="
          absolute top-20 left-4 sm:left-6
          px-4 py-2 text-sm font-semibold
          border-2 border-black dark:border-gray-300
          rounded-md
          shadow-[4px_4px_0_0_#000]
          dark:shadow-[4px_4px_0_0_#374151]
          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
          transition mt-10
        "
      >
        ← Back
      </Link>
      
       <h1
          className="text-3xl mt-30 mb-5 md:text-5xl font-extrabold text-center ml-15"
          style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
        >
         Find Your Subjects
        </h1>

      <Image
              src="/search.svg"
              alt="decor"
              width={100}
              height={100}
              className="absolute top-28 left-100 opacity-90 dark:invert pointer-events-none hidden md:block"
          />
      <div className="
        max-w-2xl mx-auto 
        bg-white dark:bg-gray-800
        border-2 border-black dark:border-gray-600
        rounded-lg
        shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151]
        p-8">

        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

         
          <select
            className="
              p-3 rounded-lg
              bg-gray-100 dark:bg-black
              text-gray-900 dark:text-white 
              border-2 border-black dark:border-white
              shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#ffffff]
              outline-none
            "
            value={stream}
            onChange={(e) => setStream(e.target.value)}
          >
            
            <option className="dark:bg-black dark:text-white" value="CSE-Core">CSE-Core</option>
             <option className="dark:bg-black dark:text-white" value="Data Science">Data Science</option>
             <option className="dark:bg-black dark:text-white" value="Data Science">Data Science</option>
             <option className="dark:bg-black dark:text-white" value="Artificial Intelligence">Artificial Intelligence</option>
             <option className="dark:bg-black dark:text-white" value="Mechanical Eng">Mechanical Eng</option>
             <option className="dark:bg-black dark:text-white" value="Civil Eng">Civil Eng</option>
             <option className="dark:bg-black dark:text-white" value="ECE Eng">ECE Eng</option>
            <option className="dark:bg-black dark:text-white" value="Electrical Eng">Electrical Eng</option>
          </select>

          
          <select
            className="
              p-3 rounded-lg
              bg-gray-100 dark:bg-black
              text-gray-900 dark:text-white 
              border-2 border-black dark:border-white
              shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#ffffff]
            "
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option className="dark:bg-black dark:text-white">1st Year</option>
            <option className="dark:bg-black dark:text-white">2nd Year</option>
            <option className="dark:bg-black dark:text-white">3rd Year</option>
            <option className="dark:bg-black dark:text-white">4th Year</option>
          </select>

          
          <select
            className="
              p-3 rounded-lg
              bg-gray-100 dark:bg-black
              text-gray-900 dark:text-white 
              border-2 border-black dark:border-white
              shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#ffffff]
            "
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option className="dark:bg-black dark:text-white" value="1">Semester 1</option>
            <option className="dark:bg-black dark:text-white" value="2">Semester 2</option>
            <option className="dark:bg-black dark:text-white" value="3">Semester 3</option>
            <option className="dark:bg-black dark:text-white" value="4">Semester 4</option>
            <option className="dark:bg-black dark:text-white" value="1">Semester 5</option>
            <option className="dark:bg-black dark:text-white" value="2">Semester 6</option>
            <option className="dark:bg-black dark:text-white" value="3">Semester 7</option>
            <option className="dark:bg-black dark:text-white" value="4">Semester 8</option>
          </select>
        </div>

        
        <div className="mt-8 flex justify-center">
          <button
            onClick={searchSubjects}
            className="
              px-6 py-2 
              bg-white dark:bg-black
              text-black dark:text-white
              border-2 border-black dark:border-white
              rounded-lg
              shadow-[6px_6px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
              hover:translate-x-[2px] hover:translate-y-[2px]
              hover:shadow-[3px_3px_0_#000] dark:hover:shadow-[2px_2px_0_#ffffff]
              transition-all font-semibold
            "
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      </div>
      
      
      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">

        {subjects.length === 0 ? (
          <p className="text-center text-gray-700 dark:text-gray-300 col-span-2">
            No subjects found.
          </p>
        ) : (
          subjects.map((sub) => (
            <div
              key={sub.id}
              onClick={() => router.push(`/notes/${sub.id}`)}
              className="
                group
                p-4 bg-white dark:bg-gray-900
                border-2 border-black dark:border-white
                rounded-2xl
                shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151]
                  hover:translate-x-[2px] hover:translate-y-[2px]
                 hover:shadow-[12px_12px_0_0_#000000] dark:hover:shadow-[12px_12px_0_0_#1f2937]
                cursor-pointer
                transition-all duration-200
                
                
              "
            >
             
              <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                {sub.subject}
              </h2>

              
              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className="
                    text-xs font-semibold px-3 py-1 
                    bg-black text-white 
                    dark:bg-white dark:text-black
                    rounded-full shadow-[3px_3px_0_#ffffff] dark:shadow-[3px_3px_0_#000]
                  "
                >
                  Semester {sub.semester}
                </span>

                <span
                  className="
                    text-xs font-semibold px-3 py-1 
                    bg-black text-white 
                    dark:bg-white dark:text-black
                    rounded-full shadow-[3px_3px_0_#ffffff] dark:shadow-[3px_3px_0_#000]
                  "
                >
                  {sub.year}
                </span>

                {sub.type && (
                  <span
                    className="
                      text-xs font-semibold px-3 py-1 
                      bg-gray-800 text-white 
                      dark:bg-gray-200 dark:text-black
                      rounded-full shadow-[3px_3px_0_#ffffff] dark:shadow-[3px_3px_0_#000]
                    "
                  >
                    {sub.type}
                  </span>
                )}
              </div>

              
              <div className="w-full h-[2px] bg-black dark:bg-white opacity-20 mb-3"></div>

              
              <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                <span className="font-bold">Credits:</span> {sub.credits ?? "N/A"}
              </p>

              <p className="text-sm font-medium text-gray-800 dark:text-gray-300">
                <span className="font-bold">Stream:</span> {sub.stream ?? "N/A"}
              </p>
            </div>

          ))
        )}
      </div>

    </div>
  );
}
