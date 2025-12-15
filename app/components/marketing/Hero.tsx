"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Button } from "./components/Button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="
      flex flex-col items-center justify-center text-center
      px-4 py-16 sm:py-20 md:py-24 mt-8
    ">

    
      <Image
        width={200}
        height={200}
        src="/hero.svg"
        alt="logo"
        className="
          rounded-lg dark:invert
          w-32 sm:w-40 md:w-48
        "
      />

      
      <div className="mt-6 max-w-4xl">
        <h1 className="
          text-3xl sm:text-4xl md:text-6xl
          font-extrabold font-serif
        ">
          <TypeAnimation
            sequence={[
              "Unlock Your Potential...",
              2000,
              "Unlock Your Creativity...",
              2000,
              "Unlock Your Knowledge...",
              2000,
              "Unlock Your Future...",
              2000,
            ]}
            wrapper="span"
            cursor
            repeat={Infinity}
            speed={30}
            className="text-gray-900 dark:text-white"
          />
        </h1>

        <h2 className="
          text-xl sm:text-2xl md:text-4xl
          font-medium mt-2
        ">
          with{" "}
          <span className="font-extrabold text-gray-900 dark:text-gray-400">
            NotesDeck!
          </span>
        </h2>

        <p className="
          text-base sm:text-lg md:text-xl
          text-gray-500 mt-4
          dark:text-white/80
        ">
          “Smarter methods. Better results. Every time.”
        </p>
      </div>

      <div className="
        mt-10
        flex flex-col md:flex-row
        items-center justify-center
        gap-8
      ">
        
        <div className="
          flex flex-col sm:flex-row
          gap-4
        ">
          <Link href="/notes">
            <Button variant="default" size="lg" color="primary">
              Notes
            </Button>
          </Link>

          <Link href="/learnmore">
            <Button variant="outline" size="lg" color="secondary">
              Learn More
            </Button>
          </Link>
        </div>

       
        <Image
          width={200}
          height={200}
          src="/hero1.svg"
          alt="Illustration"
          className="
            rounded-lg dark:invert
            hidden md:block
            w-40 lg:w-48 
          "
        />
      </div>
    </div>
  );
}
