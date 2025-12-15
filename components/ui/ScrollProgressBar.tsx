"use client";
import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / total) * 100;
      setWidth(progress);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="
        fixed left-0 top-27
        h-1
        z-50 
        rounded-r-full
        backdrop-blur-sm

        transition-all 
        duration-300 
        ease-in-out

        bg-gradient-to-r 
        from-black/60 to-black/80 
        dark:from-white/60 dark:to-white/80

        shadow-[0_0_4px_rgba(0,0,0,0.25)]
        dark:shadow-[0_0_4px_rgba(255,255,255,0.25)]
      "
      style={{ width: `${width}%` }}
    />
  );
}
