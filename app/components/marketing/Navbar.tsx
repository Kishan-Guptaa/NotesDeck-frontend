
// "use client";

// import Image from "next/image";
// import { ThemeToggle } from "../theme-toggle";
// import Link from "next/link";
// import { useSession, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";

// export function Navbar() {
//   const { data: session } = useSession();
//   const router = useRouter();

//   const defaultImage = "/user.png";

//   return (
//     <nav className="fixed p-5 top-0 w-full z-50 px-4 md:px-10 flex items-center justify-between shadow-md dark:shadow-gray-800 bg-white dark:bg-black">

//       <div className="flex items-center gap-5">
//         <Link href="/">
//           <Image
//             width={50}
//             height={80}
//             src="/logo.svg"
//             alt="logo"
//             className="rounded-lg dark:invert mt-3"
//           />
//         </Link>

//         <h1 className="text-3xl font-bold text-gray-900 dark:text-white mr-4 hidden md:block">
//           Notes Deck
//         </h1>

        
//         <div className="hidden md:flex items-center mt-2 gap-6 text-gray-700 dark:text-gray-300">

//           <Link href="/About" className="text-lg hover:underline transition duration-150">
//             About
//           </Link>

          
//           <button
//             onClick={() => {
//               if (session?.user) {
//                 router.push("/notes");   
//               } else {
//                 router.push("/signin");  
//               }
//             }}
//             className="text-lg hover:underline transition duration-150"
//           >
//             Notes
//           </button>

//           <Link href="/Contact" className="text-lg hover:underline transition duration-150">
//             Contact us
//           </Link>

//         </div>
//       </div>

//       <div className="flex items-center gap-5">
//         <ThemeToggle />

//         {session?.user ? (
//           <div className="flex items-center gap-3">
//             <Link href="/account">
//               <Image
//                 src={session.user.image || defaultImage}
//                 width={40}
//                 height={40}
//                 alt="profile"
//                 className="rounded-full h-12 w-12  object-cover border border-black shadow"
//               />
//             </Link>

//             <button
//               onClick={() => signOut()}
//               className="
//                 px-4 py-2 text-sm font-semibold 
//                 text-black dark:text-white 
//                 border-2 border-black dark:border-gray-200 
//                 rounded-md 
//                 shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0] 
//                 transition duration-200 
//                 hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
//               "
//             >
//               Logout
//             </button>
//           </div>
//         ) : (
//           <Link
//             href="/signin"
//             className="
//               px-4 py-2 w-28 text-sm font-semibold 
//               text-black dark:text-white 
//               border-2 border-black dark:border-gray-200 
//               rounded-md 
//               shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0]
//               transition duration-200 
//               hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
//               flex items-center justify-center
//             "
//           >
//             Sign in
//           </Link>
//         )}
//       </div>

//     </nav>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function Navbar() {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const defaultImage = "/user.png";

  return (
    <nav className="fixed top-0 z-50 w-full bg-white dark:bg-black shadow-md dark:shadow-gray-800 ">
      {/* MAIN BAR */}
      <div className="flex items-center justify-between px-4 md:px-10 h-27">

        {/* LEFT */}
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="logo"
              width={42}
              height={42}
              className="dark:invert mt-3"
            />
          </Link>

          <h1 className="hidden md:block text-3xl font-bold text-gray-900 dark:text-white">
            Notes Deck
          </h1>

         
          <div className="hidden md:flex gap-6 ml-6 text-gray-700 dark:text-gray-300 text-lg mt-2">
            <Link href="/About" className="hover:underline">
              About
            </Link>

            <button
              onClick={() =>
                session?.user ? router.push("/notes") : router.push("/signin")
              }
              className="hover:underline"
            >
              Notes
            </button>

            <Link href="/Contact" className="hover:underline">
              Contact us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          {/* PROFILE IMAGE (ALL SCREENS) */}
          {session?.user && (
            <Link href="/account">
              <Image
                src={session.user.image || defaultImage}
                alt="profile"
                width={36}
                height={36}
                className="h-10 w-10 rounded-full object-cover border border-black shadow"
              />
            </Link>
          )}

       
          <div className="hidden md:block">
            {session?.user ? (
              <button
                onClick={() => signOut()}
                className="
                  px-3 py-1.5 text-sm font-semibold
                  border-2 border-black dark:border-gray-200
                  rounded-md
                  shadow-[3px_3px_0_0_#000]
                  hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
                  transition
                "
              >
                Logout
              </button>
            ) : (
              <Link
                href="/signin"
                className="
                  px-3 py-1.5 text-sm font-semibold
                  border-2 border-black dark:border-gray-200
                  rounded-md
                  shadow-[3px_3px_0_0_#000]
                  hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]
                  transition
                "
              >
                Sign in
              </Link>
            )}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET MENU */}
      {open && (
        <div className="md:hidden border-t bg-white dark:bg-black">
          <div className="flex flex-col items-center gap-4 py-5 text-lg text-gray-700 dark:text-gray-300">

            <Link href="/About" onClick={() => setOpen(false)}>
              About
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                session?.user ? router.push("/notes") : router.push("/signin");
              }}
            >
              Notes
            </button>

            <Link href="/Contact" onClick={() => setOpen(false)}>
              Contact us
            </Link>

            {session?.user ? (
              <button onClick={() => signOut()} className="mt-2">
                Logout
              </button>
            ) : (
              <Link href="/signin" onClick={() => setOpen(false)} className="mt-2">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
