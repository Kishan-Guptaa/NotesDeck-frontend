

// import React from 'react';
// import { Book, Brain, Star, Notebook, Search, Zap } from 'lucide-react';
// import Image from "next/image";
// import { Grid } from "./components/Grid"; 

// export const features = [
//     {
//         title: "Organized Study Material",
//         description: "Access notes easily by selecting your stream, semester, and subject for a smooth and focused study experience.",
//         icon: Book
//     },
//     {
//         title: "Toppers’ Handwritten Notes",
//         description: "High-quality handwritten notes crafted by toppers for clear explanations and faster concept understanding.",
//         icon: Brain
//     },
//     {
//         title: "Instant PDF Access",
//         description: "Open and read notes instantly with a fast in-app PDF viewer—no downloads required.",
//         icon: Zap
//     },
//     {
//         title: "Student Ratings & Reviews",
//         description: "See which notes are the most helpful through real student reviews and star ratings.",
//         icon: Star
//     },
//     {
//         title: "Practice Quizzes",
//         description: "Test your understanding with topic-wise and subject-wise quizzes designed to reinforce learning.",
//         icon: Notebook
//     },
//     {
//         title: "Smart Search & Recommendations",
//         description: "Quickly find notes using intelligent search with personalized recommendations based on your activity.",
//         icon: Search
//     }
// ];

// export function Feature(){
//     return(
//         <div className='container mx-auto py-16 px-30'>
           
//             <div className='flex justify-between items-center p-4 rounded-lg mb-8'> 
//                 <div>
//                     <h1 className='text-5xl mb-5 font-bold'>Features</h1>
//                     <p className='text-gray-600 dark:text-gray-400'>Design for Student Success</p>
//                 </div>
//                 <div>
//                     <Image 
//                         width={150} 
//                         height={100} 
//                         src="/feature.svg" 
//                         alt="Features logo" 
//                         className="rounded-lg dark:invert" 
//                     />
//                 </div>
//             </div>
            
            
//             <Grid data={features} showButton={false} cols={3}/>

//         </div>
        
//     )
// }
import React from 'react';
import { Book, Brain, Star, Notebook, Search, Zap } from 'lucide-react';
import Image from "next/image";
import { Grid } from "./components/Grid"; 

export const features = [
  {
    title: "Organized Study Material",
    description: "Access notes easily by selecting your stream, semester, and subject for a smooth and focused study experience.",
    icon: Book
  },
  {
    title: "Toppers’ Handwritten Notes",
    description: "High-quality handwritten notes crafted by toppers for clear explanations and faster concept understanding.",
    icon: Brain
  },
  {
    title: "Instant PDF Access",
    description: "Open and read notes instantly with a fast in-app PDF viewer—no downloads required.",
    icon: Zap
  },
  {
    title: "Student Ratings & Reviews",
    description: "See which notes are the most helpful through real student reviews and star ratings.",
    icon: Star
  },
  {
    title: "Practice Quizzes",
    description: "Test your understanding with topic-wise and subject-wise quizzes designed to reinforce learning.",
    icon: Notebook
  },
  {
    title: "Smart Search & Recommendations",
    description: "Quickly find notes using intelligent search with personalized recommendations based on your activity.",
    icon: Search
  }
];

export function Feature() {
  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 md:px-16">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Features
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Designed for Student Success
          </p>
        </div>

        <Image
          width={120}
          height={100}
          src="/feature.svg"
          alt="Features logo"
          className="hidden sm:block dark:invert"
        />
      </div>

      {/* GRID */}
      <Grid data={features} showButton={false} cols={3} />
    </section>
  );
}
