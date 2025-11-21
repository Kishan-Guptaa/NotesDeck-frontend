import React from 'react';

// --- Type Definitions ---
type ButtonVariant = 'default' | 'outline'; 
type ButtonSize = 'sm' | 'md' | 'lg'; 
type ButtonColor = 'primary' | 'secondary' ;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; 
  variant?: ButtonVariant; 
  size?: ButtonSize;
  color?: ButtonColor;
}



const baseClasses = `
  font-semibold rounded-md transition duration-200 
  shadow-[4px_4px_0_0_#000000] dark:shadow-[4px_4px_0_0_#A0AEC0] 
  hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]
`;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs w-24', 
  md: 'px-4 py-2 text-sm w-28',    
  lg: 'px-6 py-3 text-base w-36',   
};


const variantAndColorClasses: Record<ButtonColor, Record<ButtonVariant, string>> = {
  
  primary: {
     
    default: 'text-white bg-gray-500 border-2 border-black dark:text-black dark:bg-gray-200 dark:border-gray-200',
    
     
    outline: 'text-black bg-transparent border-2 border-black dark:text-white dark:border-white',
    
  },
  

  secondary: {
    
    default: 'text-black bg-yellow-400 border-2 border-yellow-400 dark:bg-yellow-600 dark:border-yellow-600 dark:text-white',
    
  
    outline: 'text-yellow-600 bg-transparent border-2 border-yellow-600 dark:text-yellow-400 dark:border-yellow-400',

  },

};


export function Button({ 
  children, 
  variant = 'default', 
  size = 'md',        
  color = 'primary',    
  className = '',     
  ...props            
}: ButtonProps) {
  
  const sizeClass = sizeClasses[size];
  const variantColorClass = variantAndColorClasses[color][variant];

  
  const finalClassName = `${baseClasses} ${sizeClass} ${variantColorClass} ${className}`;
  
  return (
    <button 
      className={finalClassName}
      {...props}
    >
      {children}
    </button>
  );
}