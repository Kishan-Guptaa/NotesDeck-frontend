

import React from 'react';
import { Card } from './Card';

interface GridProps {
    data: any[]; 
    
    showButton?: boolean;
    cols?:3|4;
}


export const Grid: React.FC<GridProps> = ({ data, showButton = true ,cols = 4}) => {
    if (!data || data.length === 0) {
        return <p className="text-center py-10 text-gray-500">No items available.</p>;
    }
    const gridLayoutClass = `grid grid-cols-1 gap-8 sm-grid-cols-2  lg:grid-cols-3 ${cols == 4 ? 'xl:grid-cols-4' : 'xl:grid-cols-3'} justify-items-center`;
    return (
        <div className={gridLayoutClass}>
            {data.map((item, index) => (
                
                <Card key={index} item={item} showButton={showButton} />
            ))}
        </div>
    );
};