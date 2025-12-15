// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import NoCopyZone from "../../../../components/NoCopyZone";
// import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
// export default function UnitPage() {
//   const { unitId } = useParams();
//   const [unit, setUnit] = useState<any>(null);

//   // Font Controls
//   const [fontSize, setFontSize] = useState(18);
//   const [fontStyle, setFontStyle] = useState("sans");

//   const fontFamilies: any = {
//     sans: "Inter, sans-serif",
//     serif: "Georgia, serif",
//     mono: "JetBrains Mono, monospace",
//     casual: "'Comic Neue', cursive",
//     elegant: "'Playfair Display', serif",
//     rounded: "'Quicksand', sans-serif",
    
    
//   };

//   useEffect(() => {
//     fetch(`/api/unit/${unitId}`)
//       .then((res) => res.json())
//       .then((json) => setUnit(json.data));
//   }, [unitId]);

//   if (!unit) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
//         Loading unit...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen  transition relative">
//       <ScrollProgressBar />
//       <div
//         className="
//           fixed right-6 top-1/2 -translate-y-1/2
//           flex flex-col gap-4 p-4 border-2 border-black dark:border-white
//           bg-white dark:bg-gray-900
//            shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151]
                  
//                  rounded-sm 
//           z-50
//         "
//       >
       
//         <button
//           onClick={() => setFontSize((s) => Math.max(12, s - 2))}
//           className="
//             w-12 h-12 flex items-center justify-center text-lg font-bold
//             bg-white dark:bg-gray-800
//             border-2 border-black dark:border-white rounded-full
//             shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
//             hover:translate-x-[1px] hover:translate-y-[1px]
//             transition-all
//           "
//         >
//           A-
//         </button>

//         {/* Font + */}
//         <button
//           onClick={() => setFontSize((s) => Math.min(50, s + 2))}
//           className="
//             w-12 h-12 flex items-center justify-center text-lg font-bold
//             bg-white dark:bg-gray-800
//             border-2 border-black dark:border-white rounded-full
//             shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
//             hover:translate-x-[1px] hover:translate-y-[1px]
//             transition-all
//           "
//         >
//           A+
//         </button>

//         <select
//           value={fontStyle}
//           onChange={(e) => setFontStyle(e.target.value)}
//           className="
//             px-3 py-2 rounded-lg
//             bg-white dark:bg-gray-800
//             text-black dark:text-white text-sm font-semibold
//             border-2 border-black dark:border-white
//             shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
//             cursor-pointer
//           "
//         >
//           {Object.keys(fontFamilies).map((key) => (
//             <option key={key} value={key} className="dark:bg-gray-800 dark:text-white">
//               {key.charAt(0).toUpperCase() + key.slice(1)}
//             </option>
//           ))}
//         </select>
//       </div>

     
//       <div className="
//         max-w-3xl mx-auto mb-10 p-4 mt-30
//         bg-white dark:bg-gray-900
//         border-2 border-black dark:border-white
//         rounded-md
//         shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151]
//       ">
//         <h1 className="text-3xl md:text-4xl font-extrabold text-center text-black dark:text-white ">
//           Unit {unit.number}: {unit.name}
//         </h1>
//       </div>

//      <NoCopyZone>
//       <div
//         className="
         
//         "
//         style={{
//           fontSize: `${fontSize}px`,
//           fontFamily: fontFamilies[fontStyle],
//         }}
//       >
//         <div className=" ml-60 mr-60">
//           {unit.blocks.map((b: any) => (
//             <div key={b.id} className="mb-6">

//               {b.type === "heading_1" && (
//                 <h1 className="text-4xl font-extrabold mt-6 mb-4 text-black dark:text-white">
//                   {b.text}
//                 </h1>
//               )}

//               {b.type === "heading_2" && (
//                 <h2 className="text-3xl font-bold mt-5 mb-3 text-black dark:text-white">
//                   {b.text}
//                 </h2>
//               )}

//               {b.type === "heading_3" && (
//                 <h3 className="text-2xl font-semibold mt-4 mb-2 text-black dark:text-white">
//                   {b.text}
//                 </h3>
//               )}

//               {b.type === "paragraph" && (
//                 <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
//                   {b.text}
//                 </p>
//               )}

//             </div>
//           ))}
//         </div>
//       </div>
//       </NoCopyZone>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import NoCopyZone from "../../../../components/NoCopyZone";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export default function UnitPage() {
  const { unitId } = useParams();
  const [unit, setUnit] = useState<any>(null);

  /* ---------------- FONT CONTROLS ---------------- */
  const [fontSize, setFontSize] = useState(18);
  const [fontStyle, setFontStyle] = useState("sans");

  /* ---------------- SCROLL TO TOP ---------------- */
  const [showTopBtn, setShowTopBtn] = useState(false);

  const fontFamilies: Record<string, string> = {
    sans: "Inter, sans-serif",
    serif: "Georgia, serif",
    mono: "JetBrains Mono, monospace",
    casual: "'Comic Neue', cursive",
    elegant: "'Playfair Display', serif",
    rounded: "'Quicksand', sans-serif",
  };

  useEffect(() => {
    fetch(`/api/unit/${unitId}`)
      .then((res) => res.json())
      .then((json) => setUnit(json.data));
  }, [unitId]);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!unit) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading unit...
      </div>
    );
  }

  return (
    <div className="min-h-screen relative transition">

      <ScrollProgressBar />

     
      <button
        onClick={() => (window.location.href = "/")}
        className="
          fixed top-20 left-4 z-50
          px-4 py-2 text-sm font-semibold
          bg-white dark:bg-gray-900
          border-2 border-black dark:border-white
          rounded-md
          shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#374151]
          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] mt-10
          transition
        "
      >
        ← Back
      </button>

    
      <div
        className="
          fixed right-4 top-1/2 -translate-y-1/2 z-40
          hidden md:flex flex-col gap-4 p-4
          bg-white dark:bg-gray-900
          border-2 border-black dark:border-white
          shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#374151]
          rounded-sm
        "
      >
        <FontControls
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          fontFamilies={fontFamilies}
        />
      </div>

     
      <div
        className="
          fixed bottom-4 left-1/2 -translate-x-1/2 z-40
          flex md:hidden items-center gap-3 px-4 py-3
          bg-white dark:bg-gray-900
          border-2 border-black dark:border-white
          shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#374151]
          rounded-md
        "
      >
        <FontControls
          fontSize={fontSize}
          setFontSize={setFontSize}
          fontStyle={fontStyle}
          setFontStyle={setFontStyle}
          fontFamilies={fontFamilies}
        />
      </div>

    
      <div
        className="
          max-w-3xl mx-auto mt-28 mb-8 px-4 py-4
          bg-white dark:bg-gray-900
          border-2 border-black dark:border-white
          rounded-md
          shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#374151]
        "
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          Unit {unit.number}: {unit.name}
        </h1>
      </div>

     
      <NoCopyZone>
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-32"
          style={{
            fontSize: `${fontSize}px`,
            fontFamily: fontFamilies[fontStyle],
          }}
        >
          {unit.blocks.map((b: any) => (
            <div key={b.id} className="mb-6">

              {b.type === "heading_1" && (
                <h1 className="text-3xl sm:text-4xl font-extrabold mt-6 mb-4">
                  {b.text}
                </h1>
              )}

              {b.type === "heading_2" && (
                <h2 className="text-2xl sm:text-3xl font-bold mt-5 mb-3">
                  {b.text}
                </h2>
              )}

              {b.type === "heading_3" && (
                <h3 className="text-xl sm:text-2xl font-semibold mt-4 mb-2">
                  {b.text}
                </h3>
              )}

              {b.type === "paragraph" && (
                <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                  {b.text}
                </p>
              )}

            </div>
          ))}
        </div>
      </NoCopyZone>

     
      {showTopBtn && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            fixed bottom-24 md:bottom-6 right-4 z-40
            w-12 h-12 flex items-center justify-center
            bg-white dark:bg-gray-900
            border-2 border-black dark:border-white
            rounded-full font-bold
            shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#374151]
            hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
            transition
          "
        >
          ↑
        </button>
      )}
    </div>
  );
}



function FontControls({
  fontSize,
  setFontSize,
  fontStyle,
  setFontStyle,
  fontFamilies,
}: any) {
  return (
    <>
      <button
        onClick={() => setFontSize((s: number) => Math.max(12, s - 2))}
        className="
          w-10 h-10 sm:w-12 sm:h-12
          flex items-center justify-center text-lg font-bold
          bg-white dark:bg-gray-800
          border-2 border-black dark:border-white
          rounded-full
          shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
        "
      >
        A-
      </button>

      <button
        onClick={() => setFontSize((s: number) => Math.min(50, s + 2))}
        className="
          w-10 h-10 sm:w-12 sm:h-12
          flex items-center justify-center text-lg font-bold
          bg-white dark:bg-gray-800
          border-2 border-black dark:border-white
          rounded-full
          shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
        "
      >
        A+
      </button>

      <select
        value={fontStyle}
        onChange={(e) => setFontStyle(e.target.value)}
        className="
          px-3 py-2 rounded-lg
          bg-white dark:bg-gray-800
          text-black dark:text-white text-sm font-semibold
          border-2 border-black dark:border-white
          shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#ffffff]
        "
      >
        {Object.keys(fontFamilies).map((key) => (
          <option key={key} value={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </option>
        ))}
      </select>
    </>
  );
}
