
import React from 'react';


import { ImFacebook} from 'react-icons/im';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'; // Importa los íconos que desees
import { FaStar } from 'react-icons/fa';
import { ButtonIcon } from "@/components/ButtonIcon";
import { ProfileCard } from "@/components/ProfileCard";
import { ContactData } from "@/components/ContactData";
import { ProgressBar } from "@/components/ProgressBar";
import {IconText} from "@/components/IconText";
import { PresentationPanel } from "@/components/PresentationPanel";
import { HeaderMain } from '@/components/HeaderMain';
import { KnowledgeCard } from '@/components/KnowlwdgeCard';

const Home =() =>{
  
  return (
  <div className=' bg-slate-200 h-full flex '>
    <aside className="debug bg-white w-96 flex flex-col" >
      <div className=" scale-y-95">
      <div className=" my-12">
        <ProfileCard/>
      </div>        
      <div className="gray-line"/>
      <div className="flex flex-col mx-10">
        <ContactData leftText="Edad" rightText="25" rightTextColor="white" />
        <ContactData leftText="Ciudad" rightText="Medellin" rightTextColor="white" />
        <ContactData leftText="Correo" rightText="rocba1419@gmail.com" rightTextColor="white" />
        <ContactData leftText="Disponibilidad" rightText="Disponible" rightTextColor="green-500" />

      </div>
      <div className="gray-line"/>
      <div className="flex flex-col mx-10">
        <span className="  side-title">Lenguajes</span>
        <ProgressBar progress={100} textLeft="Español" textRight="100%" />
        <ProgressBar progress={75} textLeft="Ingles" textRight="75%" />
      </div>
      <div className="gray-line"/>
      <div className="flex flex-col mx-10">
        <span className=" side-title ">Lenguajes de Programación</span>
        <ProgressBar progress={90} textLeft="Java" textRight="90%" />
        <ProgressBar progress={65} textLeft="C" textRight="65%" />
        <ProgressBar progress={70} textLeft="Python" textRight="70%" />
        <ProgressBar progress={80} textLeft="Html" textRight="80%" />
      </div>
      <div className=" gray-line"/>
      <div className="flex flex-col mx-10">
        <span className="side-title">Habilidades Extra</span>
        <IconText text="GIT, SQL, Excel"/>
        <IconText text="Trabajo en equipo"/>
        <IconText text="Puntualidad, Confiable"/>
        
      </div>
      </div>
    </aside>
    <main className="debug w-screen">
      <section className=" debug bg-white h-96 mx-9">       
          <PresentationPanel/>
      </section>
      <section className='flex flex-col py-6'>
        <HeaderMain text1='Mi Conocimiento' text2='A continuación voy a resumir mis
        principales entendimientos acerca de diferentes
        areas del sector informático ' />
        <div className="flex flex-col justify-center items-center">
          <div className='flex flex-row justify-around'>
            <KnowledgeCard
            iconPath="/icons/webDev.svg" // Ruta al archivo SVG en la carpeta public
            text1="Desarrollo Web"
            text2="Manejo de HTML, CSS, React"
          />
          <KnowledgeCard
            iconPath="/icons/uiuxIcon.svg" // Ruta al archivo SVG en la carpeta public
            text1="Diseño UI/UX"
            text2="Aplicaciones Android, Diseño de Sitios Web"
          />
          <KnowledgeCard
            iconPath="/icons/dataBaseIcon.svg" // Ruta al archivo SVG en la carpeta public
            text1="Bases de Datos"
            text2="Manejo de SQL y Excel"
          />
          </div>
          <div className='flex flex-row justify-around'>
            <KnowledgeCard
            iconPath="/icons/gameDevelopmentIcon.svg" // Ruta al archivo SVG en la carpeta public
            text1="Desarrollo de Juegos"
            text2="Uso de Unity y Unreal Engine"
          />
          <KnowledgeCard
            iconPath="/icons/PhotographerIcon.svg" // Ruta al archivo SVG en la carpeta public
            text1="Edición"
            text2="Manejo de las herramientas de Adobe: Photoshop, Premiere y Audition "
          />
          <KnowledgeCard
            iconPath="/icons/toolsIcon.svg" // Ruta al archivo SVG en la carpeta public
            text1="Reparación"
            text2="Arreglo de daños en portatiles, Computadores de Mesa, y hardware varios "
          />
          </div>
        </div>
      </section>
      <section className='flex flex-col py-6'>
      <HeaderMain text1='Educación' text2='A continuación voy a detallar mi historia educativa hasta la fecha:' />
      </section>
      <section></section>
      <footer></footer>
    </main>
    <aside className="debug bg-white w-32 flex flex-col items-center py-6 ">
      <div className="flex flex-col items-center">
        <span className=" font-bold">Links</span>
        <ButtonIcon link="https://www.facebook.com/ricardo.osoriocastro/?locale=es_ES" icon={ImFacebook} />
        <ButtonIcon link="https://www.instagram.com/ricardoosoriocastro/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" icon={AiFillInstagram}  />
        <ButtonIcon link="https://www.linkedin.com/in/ricardo-osorio-castro-56b741293" icon={AiFillLinkedin} />
        <ButtonIcon link="https://github.com/ricardoosorioc" icon={AiFillGithub}  />
      </div>
    </aside>
  </div>
    
  )
}

export default Home;