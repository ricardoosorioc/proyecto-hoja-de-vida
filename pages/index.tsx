
import { ButtonHireMe } from "@/components/ButtonHireMe";
import React from 'react';
import ReactDOM from 'react-dom';
import { FaCoffee, FaBeer } from 'react-icons/fa';
import { ImFacebook} from 'react-icons/im';
import { AiFillInstagram, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'; // Importa los íconos que desees
import { ButtonIcon } from "@/components/ButtonIcon";
import { ProfileCard } from "@/components/ProfileCard";
import { ContactData } from "@/components/ContactData";
import { ProgressBar } from "@/components/ProgressBar";
import IconText from "@/components/IconText";

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
      <section>
        <div>
          <ButtonHireMe></ButtonHireMe>
       
        </div>
      </section>
      <section></section>
      <section></section>
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