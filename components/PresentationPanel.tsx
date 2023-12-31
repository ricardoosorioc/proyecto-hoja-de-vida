import React, { useState } from "react";
import { ButtonHireMe } from "./ButtonHireMe";
import { DialogHireMe } from "./DialogHireMe";

const PresentationPanel = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className="flex items-center justify-around mt-2">
      <div className="flex flex-col mx-11">
        <p className=" text-5xl font-bold">Soy Ricardo Osorio, un futuro</p>
        <p className=" text-5xl text-amber-600 font-bold mb-7">
          Ingeniero de Sistemas
        </p>
        <p className=" font-normal text-slate-500 mb-7 text-xl">
          Soy un estudiante universitario apasionado por la Ingeniería de
          Sistemas, próximo a<br></br> graduarme con una sólida formación
          técnica y habilidades interpersonales.<br></br> Mi enfoque se ha
          centrado en el desarrollo de soluciones tecnológicas prácticas,{" "}
          <br></br>la gestión de proyectos y la resolución de problemas en el
          ámbito de la tecnología <br></br> de la información.
        </p>
        <div className="flex flex-row items-center justify-center">
          <ButtonHireMe onClick={handleOpenDialog} />
          <DialogHireMe
            isOpen={openDialog}
            handleClose={handleCloseDialog}
            text1="Tomó la desición correcta!"
            text2="Gracias por depositarme su confianza, sientase libre de contactarme por cualquier medio que disponga.
          Espero que podamos lograr cosas grandiosas juntos. No se arrepentirá."
            textbutton="ESCRÍBEME"
            emailRecipient="rocba1419@gmail.com"
          />
        </div>
      </div>
      <div className="flex items-center mr-12">
        <img src="/images/portada.jpg" alt="Imagen" className=" w-80 h-96" />
      </div>
    </div>
  );
};

export { PresentationPanel };
