import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Importa el ícono que desees
import Button from '@mui/material/Button';

interface ButtonHireMeProps {
  onClick: () => void; // Función para manejar el clic en el botón
}


const ButtonHireMe : React.FC<ButtonHireMeProps> =({onClick})=>{
    const buttonText = "CONTRÁTAME"; // Texto del botón
    const icon = <AiOutlineArrowRight className="mr-2" />; // Ícono del botón

    return <button onClick={onClick} className=" bg-amber-600 px-2 py-2 flex items-center w-40 h-12 rounded-md hover:scale-110 hover:bg-yellow-500 font-semibold">
        <div className="flex items-center">
            {buttonText}
            <span className=" mx-2">{icon}</span>
            
      </div>
    </button>;
}
export {ButtonHireMe} ;
