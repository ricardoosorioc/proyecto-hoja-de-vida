import React, { useState} from 'react';
import { ButtonHireMe } from './ButtonHireMe';
import { DialogHireMe } from './DialogHireMe';

const PresentationPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col mx-11">
        <p className=" text-5xl font-bold">Soy Ricardo Osorio, un futuro</p>
        <p className=" text-5xl text-amber-600 font-bold mb-7">Ingeniero de Sistemas</p>
        <p className=" font-light text-slate-400 mb-7 text-base">Soy un estudiante universitario apasionado por la Ingeniería de Sistemas, <br></br> próximo a graduarme con una sólida formación técnica y habilidades interpersonales.<br></br> Mi enfoque se ha centrado en el desarrollo de soluciones tecnológicas prácticas, la gestión de proyectos <br></br> y la resolución de problemas en el ámbito de la tecnología de la información.</p>
        <ButtonHireMe onClick={handleOpenDialog}/>
        <DialogHireMe isOpen={openDialog} handleClose={handleCloseDialog} />
      </div>
      <div className='flex items-center mx-12'>
        <img src="/portada.jpg" alt="Imagen" className=" w-80 h-full" />

      </div>
      
    </div>
  );
}

export {PresentationPanel};