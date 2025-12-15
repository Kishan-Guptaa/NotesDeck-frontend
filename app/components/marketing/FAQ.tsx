// 'use client'
// import React, { useState } from "react";
// import Image from "next/image"
// import { ChevronDown } from "lucide-react";
// export interface FAQItemData {
//   question: string;
//   answer: string;
// }
// export const faqs = [
//   {
//     question: "Can I upload my own notes or PDFs to NotesDeck?",
//     answer: "No, currently users cannot upload their own PDFs. All notes are created and verified by expert contributors and toppers."
//   },
//   {
//     question: "How does NotesDeck help me score more in quizzes and exams?",
//     answer: "NotesDeck provides concise notes, topper-level strategies, and high-yield summaries that help you revise faster and improve accuracy in quizzes."
//   },
//   {
//     question: "Are the notes prepared by toppers or high-scoring students?",
//     answer: "Yes! Many notes and strategies are created with the help of top-performing students and subject experts."
//   },
//   {
//     question: "Does NotesDeck offer sections like ‘Topper Tips’ or ‘Score Booster Notes’?",
//     answer: "Yes, we include shortcuts, important topics, and proven study methods used by toppers to score higher."
//   },
//   {
//     question: "Can I practice quizzes on NotesDeck?",
//     answer: "We are working on adding interactive quizzes and chapter-wise tests to help students practice effectively."
//   },
//   {
//     question: "What makes NotesDeck different from normal PDF notes?",
//     answer: "NotesDeck provides structured, clean, and easy-to-understand notes designed to help you learn quickly without confusion."
//   },
//   {
//     question: "Do I need an account to access topper strategies?",
//     answer: "Basic notes are free, but creating an account unlocks personalized study suggestions and topper insights."
//   },
//   {
//     question: "How often are notes and topper strategies updated?",
//     answer: "Content is updated regularly based on exams, student demand, and expert recommendations."
//   }
// ];

// interface FAQItemProps extends FAQItemData {
//     isOpen : boolean;
//     toggleFAQ: () => void;
// }

// const FAQItem : React.FC<FAQItemProps> = ({ question, answer, isOpen , toggleFAQ}) => {
//     return(
//         <div 
//             className=' sm:w-full max-w-3/4 ml-40 p-6 bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 rounded shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151] transition-all duration-300 ease-in-out
           
//             hover:shadow-[12px_12px_0_0_#000000] dark:hover:shadow-[12px_12px_0_0_#1f2937]
//             hover:bg-gray-50 dark:hover:bg-gray-700
//             flex flex-col justify-between
//             cursor-pointer' 
//         >
//             <button className="flex justify-center items-center w-full text-left focus:outline-none" onClick={toggleFAQ}>
//                 <span className="text-xl font-semibold text-gray-900 dark:text-white hover:text-black/70 transition-colors">{question}</span>
//                 <ChevronDown 
//                     className={`w-6 h-6 transition-transform duration-300 ${
//                         isOpen ? 'rotate-180 text-black dark:text-white' : 'text-gray-700 dark:text-gray-900'
//                     }`}
//                 />
//             </button>
//             {isOpen && (
//                 <div className="mt-2 text-center">
//                     <p className="text-lg text-gray-600 dark:text-white leading-relaxed "> Ans.     {answer}</p>
//                 </div>
//             )}
//         </div>
//     )
// }

// export function FAQ(){
//     const [openIndex, setOpenIndex] = useState<number | null>(null);

//     const toggleFAQ = (index:number) => {
//         setOpenIndex(openIndex === index ? null : index);
//     }
//     return(
//         <div className="container mx-auto py-16 px-30">
//             <div className='flex justify-between items-center p-4 rounded-lg mb-8'>
//                 <div >

//                     <h1 className="text-5xl mb-5 font-bold">FAQs About NotesDeck</h1>
//                     <p className='text-gray-600 dark:text-gray-400'>Simple answers to help you navigate your study journey</p>
//                 </div>
//                 <div>
//                     <Image 
//                         width={100} 
//                         height={100} 
//                         src="/FAQ.svg" 
//                         alt="Features logo" 
//                         className="rounded-lg dark:invert" />
//                 </div>
//             </div>
//             <div className="space-y-6">
//                 {faqs.map((faq,index) =>(
//                     <FAQItem   key = {index} question={faq.question} answer={faq.answer} isOpen={openIndex == index} toggleFAQ={() => toggleFAQ(index)}/>
//                 ))}
//             </div>
//         </div>
//     )
// }
'use client';

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

/* ================= TYPES ================= */

export interface FAQItemData {
  question: string;
  answer: string;
}

/* ================= DATA ================= */

export const faqs: FAQItemData[] = [
  {
    question: "Can I upload my own notes or PDFs to NotesDeck?",
    answer: "No, currently users cannot upload their own PDFs. All notes are created and verified by expert contributors and toppers."
  },
  {
    question: "How does NotesDeck help me score more in quizzes and exams?",
    answer: "NotesDeck provides concise notes, topper-level strategies, and high-yield summaries that help you revise faster and improve accuracy in quizzes."
  },
  {
    question: "Are the notes prepared by toppers or high-scoring students?",
    answer: "Yes! Many notes and strategies are created with the help of top-performing students and subject experts."
  },
  {
    question: "Does NotesDeck offer sections like ‘Topper Tips’ or ‘Score Booster Notes’?",
    answer: "Yes, we include shortcuts, important topics, and proven study methods used by toppers to score higher."
  },
  {
    question: "Can I practice quizzes on NotesDeck?",
    answer: "We are working on adding interactive quizzes and chapter-wise tests to help students practice effectively."
  },
  {
    question: "What makes NotesDeck different from normal PDF notes?",
    answer: "NotesDeck provides structured, clean, and easy-to-understand notes designed to help you learn quickly without confusion."
  },
  {
    question: "Do I need an account to access topper strategies?",
    answer: "Basic notes are free, but creating an account unlocks personalized study suggestions and topper insights."
  },
  {
    question: "How often are notes and topper strategies updated?",
    answer: "Content is updated regularly based on exams, student demand, and expert recommendations."
  }
];

/* ================= FAQ ITEM ================= */

interface FAQItemProps extends FAQItemData {
  isOpen: boolean;
  toggleFAQ: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  toggleFAQ
}) => {
  return (
    <div
      className="
        w-full max-w-4xl mx-auto
        p-5 sm:p-6
        bg-white dark:bg-gray-800
        border-2 border-black dark:border-gray-600
        rounded
        shadow-[6px_6px_0_0_#000000] dark:shadow-[6px_6px_0_0_#374151]
        transition-all duration-300
        hover:shadow-[10px_10px_0_0_#000000] dark:hover:shadow-[10px_10px_0_0_#1f2937]
        hover:bg-gray-50 dark:hover:bg-gray-700
        cursor-pointer
      "
    >
      <button
        onClick={toggleFAQ}
        className="flex w-full items-center justify-between text-left gap-4"
      >
        <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
          {question}
        </span>

        <ChevronDown
          className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
            isOpen
              ? "rotate-180 text-black dark:text-white"
              : "text-gray-700 dark:text-gray-300"
          }`}
        />
      </button>

      {isOpen && (
        <div className="mt-3">
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-200 leading-relaxed">
            <span className="font-semibold">Ans.</span> {answer}
          </p>
        </div>
      )}
    </div>
  );
};

/* ================= MAIN SECTION ================= */

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 md:px-16">

     
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            FAQs About NotesDeck
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Simple answers to help you navigate your study journey
          </p>
        </div>

        <Image
          src="/FAQ.svg"
          alt="FAQ icon"
          width={80}
          height={80}
          className="hidden sm:block dark:invert"
        />
      </div>

      
      <div className="space-y-5">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            toggleFAQ={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
}
