import React, { useState} from 'react';
import { DialogMain } from './DialogMain';

interface PortfolioCardProps {
    imagenSrc: string;
    textoSuperior: string;
    textoInferior: string;
    textoDialogoSuperior: string;
    textoDialogoInferior: string;
    textoBoton: string;
    linkGithub: string;
  }

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  imagenSrc,
  textoSuperior,
  textoInferior,
  textoDialogoSuperior,
  textoDialogoInferior,
  textoBoton,
  linkGithub
}) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };  
  return (
    <div className="bg-white flex-col items-center shadow-md mx-4 mb-4 py-4 w-80 h-96 transform transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
        <div className="bg-white flex-col items-center shadow-md min-w-full">
        {/* Imagen */}
        <div className='flex justify-center'>
          <img src={imagenSrc} alt="Imagen de la tarjeta" className=" w-auto h-60" />
        </div>
        

        {/* Texto Superior */}
        <p className="text-lg font-semibold mt-2 px-4">{textoSuperior}</p>

        {/* Texto Inferior */}
        <p className="text-sm text-slate-500 mt-1 px-4">{textoInferior}</p>

        {/* Botón */}
        <button
            className=" text-amber-600 py-2 px-4 rounded mt-3 hover:scale-125 "
            onClick={handleOpenDialog}
        >
            Saber Mas +
        </button>
        <DialogMain isOpen={openDialog} handleClose={handleCloseDialog} text1={textoDialogoSuperior} text2={textoDialogoInferior} textbutton={textoBoton} externalLink={linkGithub} />

        </div>
    </div>
  );
}

export {PortfolioCard};