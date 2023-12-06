import React from 'react';

interface ProgressBarProps {
  progress: number; // Valor del progreso en porcentaje
  textLeft: string; // Texto a la izquierda
  textRight: string; // Texto a la derecha
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, textLeft, textRight }) => {
  const getColor = (percent: number) => {
    const colorFrom = '#FFD700'; // Amarillo
    const colorTo = '#FF8C00'; // Naranja oscuro

    // Calcula el color intermedio basado en el progreso
    const r = Math.floor(parseInt(colorFrom.slice(1, 3), 16) * (1 - percent / 100) + parseInt(colorTo.slice(1, 3), 16) * (percent / 100));
    const g = Math.floor(parseInt(colorFrom.slice(3, 5), 16) * (1 - percent / 100) + parseInt(colorTo.slice(3, 5), 16) * (percent / 100));
    const b = Math.floor(parseInt(colorFrom.slice(5, 7), 16) * (1 - percent / 100) + parseInt(colorTo.slice(5, 7), 16) * (percent / 100));

    return `rgb(${r},${g},${b})`;
  };

  const progressStyle = {
    width: `${progress}%`,
    background: `linear-gradient(to right, ${getColor(0)}, ${getColor(progress)})`,
  };

  return (
    <div className="relative flex flex-col justify-center py-1">
      <div className="flex flex-row w-auto justify-between">
        <span className=' text-sm text-slate-500'>{textLeft}</span>
        <span className=' text-sm text-slate-500'>{textRight}</span>
      </div>
      <div className="bg-gray-300 h-1 w-56">
        <div className="h-full" style={progressStyle}></div>
      </div>
    </div>
  );
};

export { ProgressBar };

