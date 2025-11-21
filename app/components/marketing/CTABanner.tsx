'use client'
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export function CTABanner() {
  return (

    <section className="py-16 sm:py-24 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className="relative p-8 md:p-12 lg:p-16 
            bg-white dark:bg-gray-950 
            border-2 border-black dark:border-white 
            rounded-2xl 
            /* Black/Dark Gray Shadow for the monochromatic look */
            shadow-[12px_12px_0_0_#000000] dark:shadow-[12px_12px_0_0_#374151] 
            flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12"
        >
         
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <Sparkles className="w-12 h-12 text-black dark:text-white" />
          </div>

          <div className="flex-grow text-center md:text-left">
           
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider mb-2">
              Ready to Score Higher?
            </p>
           
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
              Access Topper Notes & Strategies Today
            </h2>
            
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0">
              Join thousands of students boosting their scores with clean, concise, and expert-verified notes.
            </p>
          </div>

          
          <div className="flex-shrink-0 mt-6 md:mt-0">
            <button
              onClick={() => console.log('CTA Clicked')} 
              className="inline-flex items-center px-8 py-3 
                /* Button Border */
                border-2 border-black dark:border-white 
                text-base font-bold rounded-lg 
                /* Button Background & Text */
                text-white bg-black dark:text-black dark:bg-white 
                /* Hover Effects */
                hover:bg-gray-800 dark:hover:bg-gray-200 
                /* Button Shadow - Monochromatic */
                shadow-[4px_4px_0_0_#374151] dark:shadow-[4px_4px_0_0_#000000]
                hover:shadow-[6px_6px_0_0_#1f2937] dark:hover:shadow-[6px_6px_0_0_#000000]
                transition duration-300 ease-in-out"
            >
              Start Studying Free
              <ArrowRight className="ml-3 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}