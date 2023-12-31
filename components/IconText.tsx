import React from 'react';

interface IconTextProps {
    text: string; // El texto que se mostrará a la derecha del icono
  }

const IconText:React.FC<IconTextProps> = ({ text }) => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <img src="/icons/IconoHabilidadesExtra.svg" alt="Icono" className="w-2 h-2" />
      </div>
      <div className=' text-sm text-slate-500'>{text}</div>
    </div>
  );
}

export {IconText};