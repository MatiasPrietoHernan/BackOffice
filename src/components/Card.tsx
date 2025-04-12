import { useState } from 'react';

interface CardProps {
  title: string;
  value: string | number;
  subtitle: string;
  progressBar?: {
    current: number;
    total: number;
  };
}

const Card = ({ title, value, subtitle, progressBar }: CardProps) => {
  const percentage = progressBar ? (progressBar.current / progressBar.total) * 100 : 0;
  
  return (
    <div className="bg-white p-5 rounded-lg shadow-md hover:translate-y-1 transition-transform duration-300">
      <div className="text-base text-emerald-800 font-semibold mb-3">{title}</div>
      <div className="text-3xl font-bold mb-1 text-gray-700">{value}</div>
      <div className="text-sm text-gray-500">{subtitle}</div>
      
      {progressBar && (
        <div className="mt-3">
          <div className="h-2 bg-gray-200 rounded-md overflow-hidden">
            <div 
              className="h-full bg-emerald-600 rounded-md" 
              style={{ width: `${percentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>Utilizados: {progressBar.current} ({percentage.toFixed(1)}%)</span>
            <span>Total: {progressBar.total}</span>
          </div>
        </div>
      )}
    </div>
  );
};



export default Card;