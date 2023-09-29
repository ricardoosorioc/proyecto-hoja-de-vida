import React from 'react';

const ProfileCard = () => {
  return (
    <div className="relative text-center">
      <div className="relative inline-block">
        <img
        src="/images/portada.jpg"
        alt="Imagen de perfil"
        className="w-36 h-36 rounded-full mx-auto mb-4"
        />
        <div className="w-5 h-5 bg-green-500 rounded-full absolute bottom-7 right-2"></div>

      </div>
        <div className=" text-lg font-semibold mb-2">Ricardo Osorio Castro</div>
        <div className=" text-sm font-light text-slate-500">Estudiante de Ingenieria de Sistemas</div>
      
    </div>
  );
}

export {ProfileCard};