import React, { useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { ContactData } from "./ContactData";
import { ProfileCard } from "./ProfileCard";
import { IconText } from "./IconText";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        className="block text-gray-600 hover:text-gray-800 focus:outline-none ${isOpen ? 'fixed top-0 left-0' : ''}`}"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {isOpen && (
        <aside className=" bg-white w-full lg:w-72 flex flex-col h-screen fixed top-0 left-0">
          <div className=" my-12">
            <ProfileCard />
          </div>
          <div className="gray-line" />
          <div className="flex flex-col mx-10">
            <ContactData
              leftText="Edad"
              rightText="25"
              rightTextColor="white"
            />
            <ContactData
              leftText="Ciudad"
              rightText="Medellin"
              rightTextColor="white"
            />
            <ContactData
              leftText="Correo"
              rightText="rocba1419@gmail.com"
              rightTextColor="white"
            />
          </div>
          <div className="gray-line" />
          <div className="flex flex-col mx-10">
            <span className="  side-title">Lenguajes</span>
            <ProgressBar progress={100} textLeft="Español" textRight="100%" />
            <ProgressBar progress={75} textLeft="Ingles" textRight="75%" />
          </div>
          <div className="gray-line" />
          <div className="flex flex-col mx-10">
            <span className=" side-title ">Lenguajes de Programación</span>
            <ProgressBar progress={90} textLeft="Java" textRight="90%" />
            <ProgressBar progress={65} textLeft="C" textRight="65%" />
            <ProgressBar progress={70} textLeft="Python" textRight="70%" />
            <ProgressBar progress={75} textLeft="JavaScript" textRight="75%" />
          </div>
          <div className=" gray-line" />
          <div className="flex flex-col mx-10">
            <span className="side-title">Habilidades Extra</span>
            <IconText text="Trabajo en equipo" />
            <IconText text="Puntualidad, Confiable" />
          </div>
        </aside>
      )}
    </div>
  );
};

export {MobileMenu} ;
