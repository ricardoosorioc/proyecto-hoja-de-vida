import React from 'react';

interface ProgressBarProps {
    progress: number; // Valor del progreso en porcentaje
    textLeft: string; // Texto a la izquierda
    textRight: string; // Texto a la derecha
  }

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, textLeft, textRight }) => {
  const progressStyle = {
    width: `${progress}%`,
  };

  return (
    <div className="relative flex flex-col justify-center py-1">
        <div className="flex flex-row w-auto justify-between">
            <span className=' text-sm'>{textLeft}</span>
            <span className=' text-sm '>{textRight}</span>
        </div>
      <div className="bg-gray-300 h-1 w-56">
        <div className=" bg-amber-600 h-full " style={progressStyle}></div>
      </div>
      
    </div>
  );
}

export {ProgressBar};