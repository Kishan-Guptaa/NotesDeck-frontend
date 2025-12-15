import Image from "next/image";

export default function LearnMorePage() {
  return (
    <div className="min-h-screen   pb-20">

      {/* HERO SECTION — NotesDeck Style */}
      <section className="px-6 md:px-20 py-24 text-center">
       
        <h1
          className="text-3xl   md:text-5xl font-extrabold text-center ml-15"
          style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
        >
         Welcome to NotesDeck
        </h1>

        <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your ultimate destination for **topper-quality notes**, simplified explanations,  
          unit-wise structured content, and a clean learning experience —  
          all crafted with the NotesDeck signature UI.
        </p>

        <Image
          src="/unnamed1.svg"
          width={420}
          height={350}
          alt="learn hero"
          className="mx-auto mt-10 opacity-95 dark:invert"
        />
      </section>

      {/* WHAT YOU GET — NotesDeck Style Cards */}
      <section className="px-6 md:px-20 py-20">
        
        <h1
          className="text-3xl md:px-20 py-20   md:text-4xl font-extrabold text-center "
          style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
        >
          What You Get at NotesDeck
        </h1>
        <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {/* CARD */}
          <div className="
            p-7 rounded-2xl bg-white dark:bg-gray-900
            border-2 border-black dark:border-white
            shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#444]
            
            hover:shadow-none transition-all duration-150
          ">
            <h3 className="text-2xl font-bold mb-2"> Topper Notes</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Expert-verified notes designed for clarity, accuracy and fast revision.
            </p>
          </div>

          {/* CARD */}
          <div className="
            p-7 rounded-2xl bg-white dark:bg-gray-900
            border-2 border-black dark:border-white
            shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#444]
            
            hover:shadow-none transition-all duration-150
          ">
            <h3 className="text-2xl font-bold mb-2"> Simplified Explanations</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Hard topics broken into simple language with examples and diagrams.
            </p>
          </div>

          {/* CARD */}
          <div className="
            p-7 rounded-2xl bg-white dark:bg-gray-900
            border-2 border-black dark:border-white
            shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#444]
            
            hover:shadow-none transition-all duration-150
          ">
            <h3 className="text-2xl font-bold mb-2"> All Units Covered</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Subject → Unit → Notes, exactly how your syllabus is structured.
            </p>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS — NotesDeck Step Boxes */}
      <section className="px-6 md:px-20 py-20 ">
        <h2 className="text-4xl font-bold text-center mb-12">
          How NotesDeck Works
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">

          {/* STEP */}
          <div className="
            p-6 bg-white dark:bg-gray-800 rounded-2xl
            border-2 border-black dark:border-white
            shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#444]
          ">
            <h3 className="text-xl font-bold">1️⃣ Sign In</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Secure Google login for instant access.
            </p>
          </div>

          {/* STEP */}
          <div className="
            p-6 bg-white dark:bg-gray-800 rounded-2xl
            border-2 border-black dark:border-white
            shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#444]
          ">
            <h3 className="text-xl font-bold">2️⃣ Click Notes</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              After logging in, the Notes button becomes active in the navbar.
            </p>
          </div>

          {/* STEP */}
          <div className="
            p-6 bg-white dark:bg-gray-800 rounded-2xl
            border-2 border-black dark:border-white
            shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#444]
          ">
            <h3 className="text-xl font-bold">3️⃣ Choose Subject & Unit</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              A structured system: Semester → Subject → Unit → Topic.
            </p>
          </div>

          {/* STEP */}
          <div className="
            p-6 bg-white dark:bg-gray-800 rounded-2xl
            border-2 border-black dark:border-white
            shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#444]
          ">
            <h3 className="text-xl font-bold">4️⃣ Read High-Quality Notes</h3>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              Clean formatting, headings, bullet points, images & explanations.
            </p>
          </div>

        </div>
      </section>

      {/* WHY NOTESDECK — Signature Block */}
      <section className="px-6 md:px-20 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Why NotesDeck is Different
        </h2>

        <p className="text-lg max-w-3xl mx-auto text-gray-700 dark:text-gray-300 leading-relaxed">
          Most notes online are unorganized, incomplete, or poorly formatted.  
          NotesDeck changes that by offering **top-quality, beautifully formatted,
          unit-wise study material** that looks clean and loads instantly.
        </p>

        <Image
          src="/unnamed.svg"
          width={430}
          height={330}
          alt="benefits"
          className="mx-auto mt-10 opacity-95 dark:invert"
        />
      </section>

      {/* CTA — NotesDeck Style */}
      <section className="
        py-16 text-center w-3/4 mx-auto rounded-md
        bg-black/80 text-white 
        dark:bg-white/80 dark:text-black
        shadow-[6px_6px_0_#000]
      ">
        <h2 className="text-3xl font-extrabold">Start Learning with NotesDeck</h2>
        <p className="mt-2 text-lg">Topper-level notes are just one click away.</p>

        <a
          href="/signin"
          className="
            inline-block mt-6 px-8 py-3 
            bg-white text-black 
            dark:bg-black dark:text-white 
            font-bold rounded-xl 
            border-2 border-black dark:border-white
            shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#444]
            hover:translate-x-[4px] hover:translate-y-[4px] 
            hover:shadow-none transition
          "
        >
          Sign In to Access Notes
        </a>
      </section>

    </div>
  );
}
