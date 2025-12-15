
// "use client";

// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// type Feature = {
//   title: string;
//   desc: string;
// };

// type FeatureCardProps = {
//   title: string;
//   desc: string;
// };

// type BadgeProps = {
//   text: string;
//   sub: string;
// };

// export default function About() {
//   const features: Feature[] = [
//     { title: "Quick Editor", desc: "Write notes fast with autosave." },
//     { title: "Folders & Tags", desc: "Organize the way you think." },
//     { title: "Search", desc: "Find notes instantly." },
//     { title: "Sync", desc: "Access notes across devices." },
//     { title: "Secure Auth", desc: "Google + Email sign in." },
//     { title: "Light & Dark", desc: "Comfortable UI for day/night." },
//   ];

//   return (
//     <div className="min-h-screen pt-32 mt-10 pb-20 px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white">
      
//       <Image src="/about.svg" alt="About NotesDeck" width={150} height={150} className="absolute top-30 left-90 opacity-90 dark:invert pointer-events-none hidden md:block"/>
//       <header className="max-w-4xl mx-auto text-center mb-12">
//         <h1
//           className="text-5xl md:text-6xl font-extrabold"
//           style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
//         >
//           About NotesDeck
//         </h1>
//         <p className="mt-5 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
//           NotesDeck is the one-of-a-kind platform that doesn't just store your notes — it perfects them.
//           We transform complicated research and dense concepts into personalized, clean, and
//           fun study materials so you can master any topic effortlessly.
//         </p>
//       </header>

//       {/* TOP CARD */}
//       <section className="max-w-5xl mx-auto mb-12">
//         <div
//           className="border-2 border-black dark:border-gray-300 rounded-xl p-8 md:p-10
//                         bg-white dark:bg-black
//                         shadow-[8px_8px_0_0_#000] dark:shadow-[8px_8px_0_0_#A0AEC0]"
//         >
//           <div className="grid md:grid-cols-2 gap-8 items-center">
//             <div>
//               <h2 className="text-2xl md:text-3xl font-bold mb-3">Our Mission</h2>
//               <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
//                 To make note-taking intuitive, fast and delightful. We want learners, developers
//                 and creators to spend less time organising and more time learning and building.
//               </p>
//               <div className="mt-6 flex gap-4 justify-center md:justify-start">
//                 <Link
//                   href="/signup"
//                   className="inline-flex items-center px-4 py-2 text-sm font-semibold
//                              text-black dark:text-white border-2 border-black dark:border-gray-200
//                              rounded-md shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
//                              hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition"
//                 >
//                   Get Started
//                 </Link>
//                 <Link
//                   href="/contact"
//                   className="inline-flex items-center px-4 py-2 text-sm font-semibold
//                              text-black dark:text-white border-2 border-black dark:border-gray-200
//                              rounded-md shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
//                              hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition"
//                 >
//                   Contact Us
//                 </Link>
//               </div>
//             </div>

            
//             <div className="space-y-4">
//               <FeatureCard title="Clean & Fast" desc="Focus-first UI so you can capture ideas instantly." />
//               <FeatureCard title="Smart Organization" desc="Tags, folders and quick search to keep everything tidy." />
//               <FeatureCard title="Secure & Sync" desc="Google & Email auth with cloud sync for your notes." />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* WHY WE BUILT IT */}
//       <section className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-8 items-start">
//         <div
//           className="border-4 border-black dark:border-gray-300 rounded-xl p-6 h-80
//                         shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#A0AEC0] bg-white dark:bg-black"
//         >
//           <h3 className="text-2xl font-bold mb-3">Why we built NotesDeck</h3>
//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//             We saw students and devs juggling messy notes, code snippets, and scattered concepts.
//             NotesDeck is focused on reducing friction — quick capture, simple organization, and fast retrieval.
//           </p>
//           <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
//             <li>• Less friction when saving ideas</li>
//             <li>• Fast search across your entire library</li>
//             <li>• Simple UI that encourages daily use</li>
//           </ul>
//         </div>

//         <div
//           className="border-4 border-black dark:border-gray-300 rounded-xl p-6 h-80
//                         shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#A0AEC0] bg-white dark:bg-black"
//         >
//           <h3 className="text-2xl  font-bold mb-3">Who is it for?</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <Badge text="Students" sub="Organize subjects & revision notes" />
//             <Badge text="Developers" sub="Save code snippets & ideas" />
//             <Badge text="Learners" sub="Keep concepts and summaries" />
//             <Badge text="Writers" sub="Collect research & drafts" />
//           </div>
//         </div>
//       </section>

   
//       <section className="max-w-5xl mx-auto mb-12">
//         <h3 className="text-2xl font-bold mb-6">Core features</h3>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {features.map((f) => (
//             <div
//               key={f.title}
//               className="border border-black dark:border-gray-300 rounded-lg p-5 bg-white dark:bg-black
//                          hover:-translate-y-1 hover:shadow-lg transition"
//             >
//               <h4 className="font-semibold mb-1">{f.title}</h4>
//               <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

    
//       <section className="max-w-5xl mx-auto mb-12">
//         <h3 className="text-2xl font-bold mb-4">The story</h3>
//         <div
//           className="border-2 border-black dark:border-gray-300 rounded-xl p-8
//                         shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#A0AEC0] bg-white dark:bg-black"
//         >
//           <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
//             NotesDeck began with a simple idea — note-taking should be both beautiful and powerful.
//             Built by <strong>Kishan Gupta</strong>, NotesDeck is a personal project turned handy tool for many
//             students and creators. It’s tuned for speed, clarity and everyday use.
//           </p>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="max-w-5xl mx-auto text-center mb-12">
//         <div
//           className="inline-block border-2 border-black dark:border-gray-300 rounded-xl p-8
//                         shadow-[6px_6px_0_0_#000] dark:shadow-[6px_6px_0_0_#A0AEC0] bg-white dark:bg-black"
//         >
//           <h4 className="text-2xl font-bold mb-3">Ready to organize your notes?</h4>
//           <p className="text-gray-700 dark:text-gray-300 mb-6">
//             Sign up and start capturing ideas — fast.
//           </p>

//           <div className="flex gap-4 justify-center">
//             <Link
//               href="/signup"
//               className="inline-flex items-center px-6 py-3 text-sm font-semibold
//                          text-black dark:text-white border-2 border-black dark:border-gray-200
//                          rounded-md shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
//                          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition"
//             >
//               Create account
//             </Link>

//             <Link
//               href="/notes"
//               className="inline-flex items-center px-6 py-3 text-sm font-semibold
//                          text-black dark:text-white border-2 border-black dark:border-gray-200
//                          rounded-md shadow-[4px_4px_0_0_#000] dark:shadow-[4px_4px_0_0_#A0AEC0]
//                          hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition"
//             >
//               View demo
//             </Link>
//           </div>
//         </div>
//       </section>

      
//     </div>
//   );
// }


// function FeatureCard({ title, desc }: FeatureCardProps) {
//   return (
//     <div className="border border-black dark:border-gray-300 rounded-lg p-4 bg-white dark:bg-black">
//       <h4 className="font-semibold mb-1">{title}</h4>
//       <p className="text-gray-700 dark:text-gray-300">{desc}</p>
//     </div>
//   );
// }

// function Badge({ text, sub }: BadgeProps) {
//   return (
//     <div className="flex items-start gap-3 p-3 rounded-lg border border-black dark:border-gray-300 bg-white dark:bg-black">
//       <div
//         className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
//                       bg-gray-100 dark:bg-gray-800 text-black dark:text-white font-bold"
//       >
//         {text.charAt(0)}
//       </div>
//       <div>
//         <div className="font-semibold">{text}</div>
//         <div className="text-sm text-gray-600 dark:text-gray-300">{sub}</div>
//       </div>
//     </div>
//   );
// }
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* ---------------- TYPES ---------------- */

type Feature = {
  title: string;
  desc: string;
};

type FeatureCardProps = {
  title: string;
  desc: string;
};

type BadgeProps = {
  text: string;
  sub: string;
};

/* ---------------- PAGE ---------------- */

export default function About() {
  const features: Feature[] = [
    { title: "Quick Editor", desc: "Write and revise notes quickly with an autosave-first experience." },
    { title: "Folders & Tags", desc: "Organize notes clearly using streams, semesters, and subjects." },
    { title: "Search", desc: "Instantly find topics, formulas, and concepts when you need them." },
    { title: "Sync", desc: "Access your study material anytime across devices." },
    { title: "Secure Auth", desc: "Safe login using Google and email authentication." },
    { title: "Light & Dark", desc: "Comfortable UI designed for long study sessions, day or night." },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 md:px-20 bg-white dark:bg-black text-black dark:text-white relative mt-10">

      {/* 🔙 BACK BUTTON */}
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
          transition
        "
      >
        ← Back
      </Link>

      {/* RESPONSIVE IMAGE */}
      <Image
        src="/about.svg"
        alt="About NotesDeck"
        width={150}
        height={150}
        className="
          absolute
          top-24 sm:top-28
          left-1/2 sm:left-60
          -translate-x-1/2 sm:translate-x-0
          w-24 sm:w-32 md:w-36
          opacity-90
          dark:invert
          pointer-events-none hidden md:block
        "
      />

      {/* HEADER */}
      <header className="max-w-4xl mx-auto text-center mb-12 mt-5">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
          style={{ textShadow: "2px 2px 0px rgba(160,160,160,0.6)" }}
        >
          About NotesDeck
        </h1>
        <p className="mt-5 text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          NotesDeck is a modern study platform built to simplify learning and revision.
          Instead of scattered PDFs and confusing resources, NotesDeck provides
          structured, topper-verified notes that help students understand concepts
          faster and revise with confidence.
        </p>
      </header>

      {/* MISSION */}
      <section className="max-w-5xl mx-auto mb-12">
        <div
          className="
            border-2 border-black dark:border-gray-300
            rounded-xl p-6 sm:p-8 md:p-10
            shadow-[8px_8px_0_0_#000]
            dark:shadow-[8px_8px_0_0_#374151]
          "
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
                Our mission is to make studying efficient and stress-free.
                We believe students should spend less time searching for notes
                and more time understanding concepts.
                NotesDeck removes clutter and delivers clean, reliable study material.
              </p>

              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <Link
                  href="/signup"
                  className="
                    px-4 py-2 text-sm font-semibold
                    border-2 border-black dark:border-gray-200
                    rounded-md
                    shadow-[4px_4px_0_0_#000]
                    dark:shadow-[4px_4px_0_0_#374151]
                    hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                    transition
                  "
                >
                  Get Started
                </Link>
                <Link
                  href="/contact"
                  className="
                    px-4 py-2 text-sm font-semibold
                    border-2 border-black dark:border-gray-200
                    rounded-md
                    shadow-[4px_4px_0_0_#000]
                    dark:shadow-[4px_4px_0_0_#374151]
                    hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                    transition
                  "
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              <FeatureCard title="Clean & Fast" desc="Distraction-free UI for focused learning." />
              <FeatureCard title="Smart Organization" desc="Stream → Semester → Subject based clarity." />
              <FeatureCard title="Secure & Sync" desc="Safe authentication with cloud access." />
            </div>
          </div>
        </div>
      </section>

      {/* WHY + WHO */}
      <section className="max-w-5xl mx-auto mb-12 grid md:grid-cols-2 gap-8">
        <div
          className="
            border-4 border-black dark:border-gray-300
            rounded-xl p-6
            shadow-[6px_6px_0_0_#000]
            dark:shadow-[6px_6px_0_0_#374151]
          "
        >
          <h3 className="text-2xl font-bold mb-3">Why we built NotesDeck</h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Students were wasting hours searching for quality notes.
            NotesDeck was built to provide structured, trusted content in one place.
          </p>
          <ul className="mt-4 space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Faster exam revision</li>
            <li>• Topper-verified content</li>
            <li>• Simple and focused UI</li>
          </ul>
        </div>

        <div
          className="
            border-4 border-black dark:border-gray-300
            rounded-xl p-6
            shadow-[6px_6px_0_0_#000]
            dark:shadow-[6px_6px_0_0_#374151]
          "
        >
          <h3 className="text-2xl font-bold mb-4">Who is it for?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Badge text="Students" sub="Exams, revision, and notes" />
            <Badge text="Developers" sub="Concepts, snippets, ideas" />
            <Badge text="Learners" sub="Clear explanations" />
            <Badge text="Creators" sub="Research and organization" />
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-6">Core features</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="
                border border-black dark:border-gray-300
                rounded-lg p-5
                hover:-translate-y-1 hover:shadow-lg transition
              "
            >
              <h4 className="font-semibold mb-1">{f.title}</h4>
              <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-bold mb-4">Our Story</h3>
        <div
          className="
            border-2 border-black dark:border-gray-300
            rounded-xl p-8
            shadow-[6px_6px_0_0_#000]
            dark:shadow-[6px_6px_0_0_#374151]
          "
        >
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            NotesDeck began as a personal project by <strong>Kishan Gupta</strong>
            to solve the problem of messy and unreliable study material.
            Today, it helps students learn smarter and faster.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto text-center">
        <div
          className="
            inline-block
            border-2 border-black dark:border-gray-300
            rounded-xl p-8
            shadow-[6px_6px_0_0_#000]
            dark:shadow-[6px_6px_0_0_#374151]
          "
        >
          <h4 className="text-2xl font-bold mb-3">Ready to study smarter?</h4>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Join NotesDeck and experience focused learning.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/signup"
              className="
                px-6 py-3 text-sm font-semibold
                border-2 border-black dark:border-gray-200
                rounded-md
                shadow-[4px_4px_0_0_#000]
                dark:shadow-[4px_4px_0_0_#374151]
                hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                transition
              "
            >
              Create account
            </Link>
            <Link
              href="/notes"
              className="
                px-6 py-3 text-sm font-semibold
                border-2 border-black dark:border-gray-200
                rounded-md
                shadow-[4px_4px_0_0_#000]
                dark:shadow-[4px_4px_0_0_#374151]
                hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
                transition
              "
            >
              View demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function FeatureCard({ title, desc }: FeatureCardProps) {
  return (
    <div className="border border-black dark:border-gray-300 rounded-lg p-4">
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-gray-700 dark:text-gray-300">{desc}</p>
    </div>
  );
}

function Badge({ text, sub }: BadgeProps) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-lg border border-black dark:border-gray-300">
      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 font-bold">
        {text.charAt(0)}
      </div>
      <div>
        <div className="font-semibold">{text}</div>
        <div className="text-sm text-gray-600 dark:text-gray-300">{sub}</div>
      </div>
    </div>
  );
}
