import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import Link from "next/link";

export function Navbar() {
  return (
    
    <nav className="fixed top-0 w-full z-50 py-6 px-4 md:px-10  flex items-center justify-between shadow-md dark:shadow-gray-800 bg-white dark:bg-black">

      <div className="flex items-center gap-5">
        
        
        <Image 
          width={80} 
          height={200} 
          src="/logo.svg"
          alt="logo" 
          className="rounded-lg dark:invert mt-3" 
        />

    
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mr-4 hidden md:block">
          Notes Deck
        </h1>

        
        <div className="hidden md:flex items-center mt-2 gap-6 text-gray-700 dark:text-gray-300">
          
          
          <Link 
            href="/about" 
            className="text-lg hover:underline transition duration-150"
          >
            About
          </Link>
          
          
          <Link
            href="/notes" 
            className="text-lg hover:underline transition duration-150"
          >
            Notes
          </Link>
          <Link 
            href="/contact" 
            className="text-lg hover:underline transition duration-150"
          >
            Contact us
          </Link>
        </div>
      </div>

      
      <div className="flex items-center gap-5">
        
        
        <button 
          className="
            px-4 py-2 w-28 text-sm font-semibold 
            text-black dark:text-white 
            border-2 border-black dark:border-gray-200 
            rounded-md 
            shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0] 
            transition duration-200 
            hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
          "
        >
          Sign in
        </button>

        
        <ThemeToggle />
      </div>
    </nav>
  );
}