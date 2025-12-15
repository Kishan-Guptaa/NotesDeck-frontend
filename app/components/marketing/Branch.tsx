
// import React from 'react';

// import { Cpu, Shield, Brain, Wrench, Sprout, Zap, Building2 } from 'lucide-react'; 
// import Image from "next/image";

// import { Grid } from "./components/Grid"; 

// const branches = [
//     {
//         title: "CSE Core",
//         description: "Fundamentals of algorithms, data structures, and operating systems.",
//         icon: Cpu
//     },
//     {
//         title: "Data Science",
//         description: "Machine learning, statistical analysis, and big data technologies.",
//         icon: Sprout
//     },
//     {
//         title: "Cyber Security",
//         description: "Network defense, ethical hacking, and digital forensics principles.",
//         icon: Shield
//     },
//     {
//         title: "Artificial Intelligence",
//         description: "Deep learning, neural networks, and advanced AI models.",
//         icon: Brain
//     },
//     {
//         title: "Mechanical Eng.",
//         description: "Thermodynamics, robotics, and fundamental design principles.",
//         icon: Wrench
//     },
//     {
//         title: "Civil Eng.",
//         description: "Structural design, transportation, and construction management.",
//         icon: Building2
//     },
//     {
//         title: "ECE Engineering",
//         description: "Electronics, communication systems, and signal processing.",
//         icon: Zap
//     },
//     {
//         title: "Electrical Eng.",
//         description: "Power systems, circuit analysis, and renewable energy technologies.",
//         icon: Zap
//     },
// ];

// export function Branch() {
//     return (
//         <div className="container mx-auto py-16 px-30 ">
            
//             <div className='flex justify-between items-center p-4 rounded-lg '>
//                 <div>
//                     <h1 className='text-5xl mb-5 font-bold'>Branches</h1>
//                     <p className='text-gray-600 dark:text-gray-400'>
//                         Exploring the different facets of our organization.
//                     </p>
//                 </div>
//                 <div>
//                     <Image
//                         width={100}
//                         height={100}
//                         src="/branch.svg"
//                         alt="Branches logo"
//                         className="rounded-lg dark:invert"
//                     />
//                 </div>
//             </div>
            
          
//             <Grid data={branches} showButton={true} cols={4} />
            
            
//         </div>
//     );
// }
import React from 'react';
import {
  Cpu,
  Shield,
  Brain,
  Wrench,
  Sprout,
  Zap,
  Building2
} from 'lucide-react';
import Image from "next/image";

import { Grid } from "./components/Grid";

const branches = [
  {
    title: "CSE Core",
    description: "Fundamentals of algorithms, data structures, and operating systems.",
    icon: Cpu
  },
  {
    title: "Data Science",
    description: "Machine learning, statistical analysis, and big data technologies.",
    icon: Sprout
  },
  {
    title: "Cyber Security",
    description: "Network defense, ethical hacking, and digital forensics principles.",
    icon: Shield
  },
  {
    title: "Artificial Intelligence",
    description: "Deep learning, neural networks, and advanced AI models.",
    icon: Brain
  },
  {
    title: "Mechanical Eng.",
    description: "Thermodynamics, robotics, and fundamental design principles.",
    icon: Wrench
  },
  {
    title: "Civil Eng.",
    description: "Structural design, transportation, and construction management.",
    icon: Building2
  },
  {
    title: "ECE Engineering",
    description: "Electronics, communication systems, and signal processing.",
    icon: Zap
  },
  {
    title: "Electrical Eng.",
    description: "Power systems, circuit analysis, and renewable energy technologies.",
    icon: Zap
  },
];

export function Branch() {
  return (
    <section className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-8 md:px-16">

      {/* HEADER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
            Branches
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Exploring the different facets of our organization.
          </p>
        </div>

        <Image
          width={90}
          height={90}
          src="/branch.svg"
          alt="Branches logo"
          className="hidden sm:block dark:invert"
        />
      </div>

      {/* GRID */}
      <Grid data={branches} showButton={true} cols={4} />
    </section>
  );
}
