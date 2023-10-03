import React from 'react';
import 'tailwindcss/tailwind.css';

interface ButtonIconProps{
    icon: React.ElementType;
    link: string;
}

const ButtonIcon: React.FC<ButtonIconProps> = ({ link, icon: Icon})=>{
    return( 
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button className=" bg-amber-600 px-3 py-3 mt-4 rounded-full hover:scale-125 hover:bg-yellow-500">
                {Icon && <Icon  />} {/* Renderiza el ícono si se proporciona */}
            </button>
        </a>)
}
export {ButtonIcon} ;
