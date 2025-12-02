
"use client"
import Image from "next/image";
import { ThemeToggle } from "../theme-toggle";
import { TypeAnimation } from 'react-type-animation'; 
import { Button } from "./components/Button";

export function Hero() {
  return (
    
    <div className="flex flex-col items-center justify-center text-center p-4 mt-30">

    
      <Image 
        width={200} 
        height={200} 
        src="/hero.svg" 
        alt="logo" 
        className="rounded-lg dark:invert " 
      />

    
      <div className=""> 
        
        <h1 className="text-5xl md:text-6xl font-extrabold font-serif">
          <TypeAnimation
            sequence={[
              'Unlock Your Potential...', 
              2000, 
              'Unlock Your Creativity...',
              2000,
              'Unlock Your Knowledge...', 
              2000,
              'Unlock Your Future...',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={30} 
            className="text-gray-900 dark:text-white"
          />
        </h1>

        <h2 className="text-3xl md:text-4xl font-medium mt-2">
          with <span className="font-extrabold text-gray-900 dark:text-gray-400">NotesDeck!</span>
        </h2>
        <p className="text-gray-500 text-xl mt-5 dark:text-white/80">“Smarter methods. Better results. Every time.”</p>
      </div>

      <div className="flex items-center justify-center space-x-10 "> 
        
        
       <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  
  <Button 
    variant="default" 
    size="md" 
    color="primary"
  >
    Notes
  </Button>
  

  <Button 
    variant="outline" 
    size="lg" 
    color="secondary"
  >
    Learn More
  </Button>
</div>
        
        
        <Image 
          width={200} 
          height={200} 
          src="/hero1.svg" 
          alt="Illustration" 
          className="rounded-lg dark:invert hidden md:block" 
        />
        
      </div>
      
    </div>
  );
}