'use client'
import { Star } from 'lucide-react';
import Image from "next/image";
import { useEffect, useState } from 'react';
import React from 'react';


interface ReviewItem {
    name: string;
    course: string;
    review: string;
    stars: number;
    image: string;
}

export const reviews: ReviewItem[] = [
    
    { name: "Aarav Mehta", course: "Engineering Student", review: "Notes Deck made my exam prep so much easier. The concise notes helped me revise faster without feeling overwhelmed.", stars: 5, image: "/reviews/aarav.png" },
    { name: "Ishika Jain", course: "Computer Science Student", review: "The quick one-shot notes are a lifesaver! Perfect for last-minute study sessions before tests.", stars: 5, image: "/reviews/ishika.png" },
    { name: "Kunal Sharma", course: "IT Student", review: "Toppers’ handwritten notes made tough concepts extremely easy to grasp. Super helpful!", stars: 5, image: "/reviews/kunal.png" },
    { name: "Meera Kapoor", course: "Engineering Student", review: "The structured layout helped me find my subject notes instantly. No more wasting time searching everywhere.", stars: 5, image: "/reviews/meera.png" },
    { name: "Ritvik Thakur", course: "Computer Science Student", review: "The practice quizzes helped me identify my weak topics and improve quickly. Highly recommend!", stars: 5, image: "/reviews/ritvik.png" },
    { name: "Sanya Arora", course: "IT Student", review: "Love how clean and fast the interface is. PDFs load instantly and the viewer works smoothly.", stars: 5, image: "/reviews/sanya.png" },
    { name: "Nikhil Joshi", course: "Engineering Student", review: "I'm impressed by the quality of notes. Everything is clear, well-structured, and easy to revise.", stars: 5, image: "/reviews/nikhil.png" },
    { name: "Tanya Verma", course: "Computer Science Student", review: "The flashcards helped me memorize formulas and definitions quickly. Best study tool I've used!", stars: 5, image: "/reviews/tanya.png" },
    { name: "Aditya Chauhan", course: "IT Student", review: "Notes-Deck completely upgraded my study strategy. I save so much time now.", stars: 5, image: "/reviews/aditya.png" },
    { name: "Shruti Mishra", course: "Engineering Student", review: "Everything is organized so neatly. Stream → Semester → Subject makes navigation unbelievably simple.", stars: 5, image: "/reviews/shruti.png" },
    { name: "Dev Raj", course: "Computer Science Student", review: "The ratings and reviews helped me pick the most helpful notes instantly. Very student-friendly.", stars: 5, image: "/reviews/dev.png" },
    { name: "Mira Sethi", course: "Engineering Student", review: "The PDFs are crisp and easy to read. And the fast loading speed is amazing!", stars: 5, image: "/reviews/mira.png" },
    { name: "Kabir Malhotra", course: "IT Student", review: "A perfect platform for revision. One-shot notes + quizzes = unbeatable combo.", stars: 5, image: "/reviews/kabir.png" },
    { name: "Jiya Sagar", course: "Engineering Student", review: "Highly organized and reliable. I wish I had found Notes Deck earlier!", stars: 5, image: "/reviews/jiya.png" },
    { name: "Raghav Bansal", course: "Computer Science Student", review: "The recommendations feature shows exactly what I need next. Super helpful!", stars: 5, image: "/reviews/raghav.png" },
    { name: "Aanya Khanna", course: "IT Student", review: "Beautiful UI, easy navigation, and excellent content quality. Perfect for students.", stars: 5, image: "/reviews/aanya.png" },
    { name: "Yuvraj Singh", course: "Engineering Student", review: "The topper notes helped me understand subjects that I always struggled with. Very grateful!", stars: 5, image: "/reviews/yuvraj.png" },
    { name: "Diya Kulkarni", course: "Computer Science Student", review: "Notes Deck keeps everything in one place. My study routine has become so much smoother.", stars: 5, image: "/reviews/diya.png" },
];


const REVIEWS_PER_PAGE = 6;
const INTERVAL_MS = 5000;

// const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => {

//     return (
//         <div
//             className=' h-60 sm:w-full max-w-sm p-6 bg-white/20 dark:bg-gray-800/20 border-2 border-black dark:border-gray-600 rounded-xl shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151] transition-all duration-300 ease-in-out
//             hover:scale-[1.03] 
//             hover:shadow-[12px_12px_0_0_#000000] dark:hover:shadow-[12px_12px_0_0_#1f2937]
//             hover:bg-gray-50 dark:hover:bg-gray-700
//             flex flex-col justify-between
//             cursor-pointer'
//         >
//             <div className='flex flex-col'>

//                 <div className='flex items-center mb-4'>
//                     {/* <Image 
                        
//                         width={48}
//                         height={48}
//                         src={review.image}
//                         alt={review.name}
//                         className="rounded-full object-cover mr-4"
//                     /> */}
//                     <div>
//                         <p className="font-bold text-lg text-gray-900 dark:text-white">{review.name}</p>
//                         <p className="text-sm text-blue-600 dark:text-blue-400">{review.course}</p>
//                     </div>
//                 </div>

//                 <p className="text-gray-700 dark:text-gray-300 italic mb-4">
//                     "{review.review}"
//                 </p>
//             </div>

//             <div className='flex'>
//                 {[...Array(review.stars)].map((_, i) => (
//                     <Star key={i} className="h-5 w-5 fill-black text-black/90 dark:fill-white" />
//                 ))}
//             </div>
//         </div>
//     );
// };

const ReviewCard: React.FC<{ review: ReviewItem }> = ({ review }) => {
  return (
    <div
      className="
        min-h-[220px] sm:min-h-[240px]
        w-full max-w-sm
        p-5 sm:p-6
        bg-white/20 dark:bg-gray-800/20
        border-2 border-black dark:border-gray-600
        rounded-xl
        shadow-[6px_6px_0_0_#000000] dark:shadow-[6px_6px_0_0_#374151]
        transition-all duration-300
        hover:scale-[1.03]
        hover:shadow-[10px_10px_0_0_#000000] dark:hover:shadow-[10px_10px_0_0_#1f2937]
        hover:bg-gray-50 dark:hover:bg-gray-700
        flex flex-col justify-between
      "
    >
      <div>
        <div className="mb-3">
          <p className="font-bold text-base sm:text-lg text-gray-900 dark:text-white">
            {review.name}
          </p>
          <p className="text-sm text-blue-600 dark:text-blue-400">
            {review.course}
          </p>
        </div>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 italic">
          "{review.review}"
        </p>
      </div>

      <div className="flex mt-4">
        {[...Array(review.stars)].map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 sm:h-5 sm:w-5 fill-black text-black/90 dark:fill-white"
          />
        ))}
      </div>
    </div>
  );
};


// export function Review() {
//     const [currentPage, setCurrentPage] = useState(0);
//     const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentPage(prevPage => (prevPage + 1) % totalPages);
//         }, INTERVAL_MS);
//         return () => clearInterval(timer);
//     }, [totalPages]);


//     const startIndex = currentPage * REVIEWS_PER_PAGE;
//     const endIndex = startIndex + REVIEWS_PER_PAGE;
//     const currentReviews = reviews.slice(startIndex, endIndex);

//     return (

//         <div
//             className="
//             container mx-auto py-16 px-30
//             bg-[url('/reviews.svg')]     
//             dark:bg-[url('/reviews1.svg')] 
//             bg-cover bg-center bg-no-repeat
//             relative overflow-hidden">


//             <div className="absolute inset-0 bg-white/70 dark:invert pointer-events-none"></div>


//             <div className="relative z-10">
//                 <div className="flex justify-between items-center p-4 rounded-lg">
//                     <div>
//                         <h1 className="text-5xl mb-5 font-bold">Loved by Learners</h1>
//                         <p className="text-gray-600 dark:text-gray-400">
//                             Honest reviews from students who used our platform to succeed.
//                         </p>
//                     </div>
//                     <div>
//                         <Image
//                             width={100}
//                             height={100}
//                             src="/review.svg"
//                             alt="Reviews icon"
//                             className="rounded-lg dark:invert"
//                         />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {currentReviews.map((review) => (
//                         <ReviewCard key={review.name} review={review} />
//                     ))}
//                 </div>

//                 <div className="flex justify-center mt-8 space-x-2">
//                     {[...Array(totalPages)].map((_, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setCurrentPage(index)}
//                             className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === currentPage ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'
//                                 }`}
//                             aria-label={`Go to review page ${index + 1}`}
//                         />
//                     ))}
//                 </div>
//             </div>


//         </div>
//     );
// }
export function Review() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(reviews.length / REVIEWS_PER_PAGE);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [totalPages]);

  const startIndex = currentPage * REVIEWS_PER_PAGE;
  const currentReviews = reviews.slice(startIndex, startIndex + REVIEWS_PER_PAGE);

  return (
    <div
      className="
        relative overflow-hidden
        bg-[url('/reviews.svg')]
        dark:bg-[url('/reviews1.svg')]
        bg-cover bg-center
        py-12 sm:py-16
        px-4 sm:px-8 md:px-16
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
              Loved by Learners
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl">
              Honest reviews from students who used our platform to succeed.
            </p>
          </div>

          <Image
            width={80}
            height={80}
            src="/review.svg"
            alt="Reviews icon"
            className="dark:invert hidden sm:block"
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {currentReviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center mt-8 space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index)}
              className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-colors
                ${
                  index === currentPage
                    ? "bg-black dark:bg-white"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
