import React from 'react';

interface EducationCardProps{
    textoSuperiorIzuierdo: string,
    textoInferiorIzquierdo: string,
    textoInferiorDerecho: string,
    textoSuperiorDerecho: string,
    textoDebajoUno: string,

}


const EducationCard: React.FC<EducationCardProps> = ({textoSuperiorIzuierdo,textoInferiorIzquierdo,textoInferiorDerecho,textoSuperiorDerecho,textoDebajoUno}) => {
  return (
    <div className="flex justify-between bg-white pt-12 pb-3 pl-9 pr-7 mx-8">
      {/* Sección Izquierda */}
      <div className="w-2/5 p-4">
        <div className="mb-4">
          {/* Texto superior */}
          <p className="text-lg font-semibold">{textoSuperiorIzuierdo}</p>
        </div>
        <div className="flex ">
          {/* Textos inferiores */}
          <p className="text-sm">{textoInferiorIzquierdo}</p>
          <p className=" text-xs text-white bg-amber-500 ml-12">{textoInferiorDerecho}</p>
        </div>
      </div>

      {/* Sección Derecha */}
      <div className="w-3/5 p-4">
        {/* Texto subrayado */}
        <p className="text-lg font-semibold">{textoSuperiorDerecho}</p>

        <div className="mt-4">
          {/* Texto debajo */}
          <p className=" text-base text-slate-500">{textoDebajoUno}</p>
        </div>
      </div>
    </div>
  );
}

export {EducationCard};