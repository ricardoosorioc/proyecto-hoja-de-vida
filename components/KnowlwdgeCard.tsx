import React from 'react';

interface KnowledgeCardProps {
    iconPath: string; // La ruta al archivo SVG en la carpeta public
    text1: string;
    text2: string;
}

const KnowledgeCard: React.FC<KnowledgeCardProps> = ({ iconPath, text1, text2,
  }) => {
    return (
      <div className="knowledge-card flex flex-col items-center bg-white w-80 scale-105 h-56 py-12 px-12 mx-6 my-4 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
        <img src={iconPath} alt="Icono" className=" w-16 h-16 mb-2 text-orange-900" />
        <p className="text-center text-lg font-semibold">{text1}</p>
        <p className="text-center text-sm text-slate-500">{text2}</p>
      </div>
    );
}

export {KnowledgeCard};