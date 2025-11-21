// components/Card.tsx

import React from 'react';
import { LucideIcon } from 'lucide-react'; 


interface CardItem {
    title: string;
    description: string;
    icon: LucideIcon;
}

interface CardProps {
    item: CardItem;
   
    showButton?: boolean; 
}


export const Card: React.FC<CardProps> = ({ item, showButton = true }) => {
    const IconComponent = item.icon; 
    
    
    const buttonText = item.title.toLowerCase().includes('notes') || item.title.toLowerCase().includes('quiz') 
                       ? 'View Notes' 
                       : 'Explore More';

    return (
        <div 
            className=' h-60 sm:w-full max-w-sm p-6 bg-white dark:bg-gray-800 border-2 border-black dark:border-gray-600 rounded-xl shadow-[8px_8px_0_0_#000000] dark:shadow-[8px_8px_0_0_#374151] transition-all duration-300 ease-in-out
            hover:scale-[1.03] 
            hover:shadow-[12px_12px_0_0_#000000] dark:hover:shadow-[12px_12px_0_0_#1f2937]
            hover:bg-gray-50 dark:hover:bg-gray-700
            flex flex-col justify-between
            cursor-pointer' 
        >
            <div>
                
                {IconComponent && <IconComponent className="h-8 w-8 text-gray-800 dark:text-white mb-4" />}
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.description}
                </p>
            </div>
            
            
            {showButton && (
                <button
                    className="
                        mt-4 px-4 py-2 w-full font-semibold text-sm 
                        bg-black/80 text-white rounded-md 
                        hover:bg-black dark:bg-white/80 dark:text-black dark:hover:bg-white
                        transition duration-150 ease-in-out
                    "
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};