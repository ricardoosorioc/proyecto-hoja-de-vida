import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai'; // Importa el ícono que desees


const ButtonHireMe =()=>{
    const buttonText = "CONTRATAME"; // Texto del botón
    const icon = <AiOutlineArrowRight className="mr-2" />; // Ícono del botón


    return <button className=" bg-amber-600 px-2 py-2 flex items-center rounded-md hover:scale-110 hover:bg-yellow-500 font-semibold">
        <div className="flex items-center">
            {buttonText}
            <span className=" mx-2">{icon}</span>
            
      </div>
    </button>;
}
export {ButtonHireMe} ;
