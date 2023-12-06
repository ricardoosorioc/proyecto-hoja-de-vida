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
        <p className=" font-light text-slate-500 mb-7 text-base">Soy un estudiante universitario apasionado por la Ingeniería de Sistemas, <br></br> próximo a graduarme con una sólida formación técnica y habilidades interpersonales.<br></br> Mi enfoque se ha centrado en el desarrollo de soluciones tecnológicas prácticas, la gestión de proyectos <br></br> y la resolución de problemas en el ámbito de la tecnología de la información.</p>
        <ButtonHireMe onClick={handleOpenDialog}/>
        <DialogHireMe isOpen={openDialog} handleClose={handleCloseDialog} text1='Tomó la desición correcta!' text2='Gracias por depositarme su confianza, sientase libre de contactarme por cualquier medio que disponga.
          Espero que podamos lograr cosas grandiosas juntos. No se arrepentirá.' textbutton='ESCRÍBEME' emailRecipient='rocba1419@gmail.com' />
      </div>
      <div className='flex items-center mr-12'>
        <img src="/images/portada.jpg" alt="Imagen" className=" w-80 h-96" />

      </div>
      
    </div>
  );
}

export {PresentationPanel};