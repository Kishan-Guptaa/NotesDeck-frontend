

"use client";

import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import About from "../../About/page";
export function Navbar() {
  const { data: session } = useSession();

  const defaultImage = "/user.png"; 

  return (
    <nav className="fixed p-5 top-0 w-full z-50  px-4 md:px-10 flex items-center justify-between shadow-md dark:shadow-gray-800 bg-white dark:bg-black">

      <div className="flex items-center gap-5">
        <Link href="/">
              <Image
                width={50}
                height={80}
                src="/logo.svg"
                alt="logo"
                className="rounded-lg dark:invert mt-3"
              />
        </Link>
        

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mr-4 hidden md:block">
          Notes Deck
        </h1>

        <div className="hidden md:flex items-center mt-2 gap-6 text-gray-700 dark:text-gray-300">
          <Link href="/About" className="text-lg hover:underline transition duration-150">
            About
          </Link>
          <Link href="/notes" className="text-lg hover:underline transition duration-150">
            Notes
          </Link>
          <Link href="/Contact" className="text-lg hover:underline transition duration-150">
            Contact us
          </Link>
        </div>
      </div>
        
      
      <div className="flex items-center gap-5">
         <ThemeToggle />
        {session?.user ? (
          
          <div className="flex items-center gap-3">
            <Link href="/account">
              <Image
                src={session.user.image || defaultImage}
                width={40}
                height={40}
                alt="profile"
                className="rounded-full border border-gray-400"
              />
            </Link>
            

            <button
              onClick={() => signOut()}
              className="
                px-4 py-2 text-sm font-semibold 
                text-black dark:text-white 
                border-2 border-black dark:border-gray-200 
                rounded-md 
                shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0] 
                transition duration-200 
                hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
              "
            >
              Logout
            </button>
          </div>
        ) : (
         
          <Link
            href="/signin"
            className="
              px-4 py-2 w-28 text-sm font-semibold 
              text-black dark:text-white 
              border-2 border-black dark:border-gray-200 
              rounded-md 
              shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0] 
              transition duration-200 
              hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
              flex items-center justify-center
            "
          >
            Sign in
          </Link>
        )}

        
      </div>

    </nav>
  );
}
