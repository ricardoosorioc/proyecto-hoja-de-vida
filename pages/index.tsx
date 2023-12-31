import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"; // Importa los íconos que desees
import { ButtonIcon } from "@/components/ButtonIcon";
import { ProfileCard } from "@/components/ProfileCard";
import { ContactData } from "@/components/ContactData";
import { ProgressBar } from "@/components/ProgressBar";
import { IconText } from "@/components/IconText";
import { PresentationPanel } from "@/components/PresentationPanel";
import { HeaderMain } from "@/components/HeaderMain";
import { KnowledgeCard } from "@/components/KnowlwdgeCard";
import { EducationCard } from "@/components/EducationCard";
import { PortfolioCard } from "@/components/PortfolioCard";
import Head from "next/head";
import { MobileMenu } from "@/components/MobileMenu";

const Home = () => {
  return (
    <div className=" bg-slate-200 h-full flex-row overflow-x-hidden ">
      <Head>
        <title>Hoja de Vida</title>
      </Head>
      <aside className=" bg-white w-full lg:w-72 flex flex-col h-screen fixed top-0 left-0">
        <div className=" my-12">
          <ProfileCard />
        </div>
        <div className="gray-line" />
        <div className="flex flex-col mx-10">
          <ContactData leftText="Edad" rightText="25" rightTextColor="white" />
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
      <main className=" flex-grow ml-72 mr-24 ">
        <section className=" bg-white h-96 mx-9">
          <PresentationPanel />
        </section>
        <section className="flex flex-col py-6">
          <HeaderMain
            text1="Mi Conocimiento"
            text2="A continuación voy a resumir mis
        principales entendimientos acerca de diferentes
        areas del sector informático "
          />
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row justify-around">
              <KnowledgeCard
                iconPath="/icons/webDev.svg" // Ruta al archivo SVG en la carpeta public
                text1="Desarrollo Web"
                text2="Manejo de HTML, CSS, React, NextJs"
              />
              <KnowledgeCard
                iconPath="/icons/uiuxIcon.svg" // Ruta al archivo SVG en la carpeta public
                text1="Diseño UI/UX"
                text2="Aplicaciones Android, Diseño de Sitios Web"
              />
              <KnowledgeCard
                iconPath="/icons/dataBaseIcon.svg" // Ruta al archivo SVG en la carpeta public
                text1="Bases de Datos"
                text2="Manejo de SQL, Postgresql y Excel"
              />
            </div>
            <div className="flex flex-row justify-around">
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
        <section className="flex flex-col">
          <HeaderMain
            text1="Educación"
            text2=""
          />
          <div className=" bg-white flex-col  mx-8">
            <div className="gray-line"></div>
            <EducationCard
              textoSuperiorIzuierdo="Universidad de Antioquia"
              textoInferiorIzquierdo="Estudiante"
              textoInferiorDerecho="Ene 2018 - Hasta la fecha"
              textoSuperiorDerecho="Educación Superior"
              textoDebajoUno="En esta Universidad, estoy cursando la carrera Ingenieria de Sistemas, en la cual,
              en el presente, estoy cursando el octavo semestre. Al finalizar la carrera tendré el titulo que me 
              acreditará como Ingeniero de Sistemas"
            />
          </div>
        </section>
        <HeaderMain
          text1="Portafolio"
          text2="A continuación voy a mostrar algunos de los proyectos que he realizado o
          en los que he participado hasta la fecha hasta la fecha:"
        />

        <section className="flex flex-col overflow-x-auto">
          <div className=" flex flex-row overflow-y-hidden overflow-x-auto w-screen  mr-8">
            <PortfolioCard
              imagenSrc="/images/gestion-de-inventario.png"
              textoSuperior="Gestion de Inventario"
              textoInferior="Proyecto que simula un sistema de inventario."
              textoDialogoSuperior="Finalizado"
              textoDialogoInferior="El proyecto tiene como objetivo desarrollar una aplicación web de administración de inventario. La aplicación permitirá a los usuarios gestionar materiales y movimientos de inventario, así como administrar usuarios con diferentes roles.
               La web se construirá utilizando tecnologías como NextJS, React, y TailwindCSS, y se integrará con una base de datos en Supabase."
              textoBoton="Ir a Github"
              linkGithub="https://github.com/jalexisherrera/base-sistema-gestion-inventarios"
            />
            <PortfolioCard
              imagenSrc="/images/AExpress.jpg"
              textoSuperior="American Express - Predicción"
              textoInferior="IA que predice si que un cliente será moroso con su tarjeta de crédito."
              textoDialogoSuperior="En curso"
              textoDialogoInferior="¿Cómo saben los emisores de tarjetas que devolveremos lo que cobramos? La predicción del incumplimiento crediticio es fundamental para gestionar el riesgo en un negocio de préstamos al consumo. La predicción del incumplimiento crediticio permite a los prestamistas optimizar las decisiones crediticias, lo que conduce a una mejor experiencia del cliente y a una economía empresarial sólida.
              Este proyecto actualmente esta en la fase de entrenamiento de la IA."
              textoBoton="Ir a Github"
              linkGithub="https://github.com/ricardoosorioc/Proyecto_American_Express-Default_Prediction.git"
            />
            <PortfolioCard
              imagenSrc="/images/code-factory.jpg"
              textoSuperior="Code Factory"
              textoInferior="Proyecto que busca hacer un Sistema de Servicios de Movilidad Urbana."
              textoDialogoSuperior="Finalizado"
              textoDialogoInferior="El principal objetivo del SSMU es enlazar la solicitud que hace un usuario de un servicio de transporte
              con un conductor de un vehículo que acepta suplir la solicitud. Así se ofrece una nueva modalidad de
              transporte público innovadora respecto a los servicios tradicionales de taxis de las grandes ciudades. Este es un proyecto que ocupa varias asignaturas de la carrera Ingeniería de Sistemas de la UdeA."
              textoBoton="Ir a Github"
              linkGithub="https://github.com/CodeF-ctory2023"
            />
            <PortfolioCard
              imagenSrc="/images/asterisk.jpg"
              textoSuperior="Llamadas Seguras en Asterisk"
              textoInferior="Proyecto para cifrar llamadas telefónicas con Asterisk."
              textoDialogoSuperior="Completo"
              textoDialogoInferior="En las comunicaciones VoIP, es importante garantizar la seguridad y privacidad de las conversaciones. Para lograrlo, se utilizan técnicas de cifrado que protegen la confidencialidad de los datos transmitidos. 
              Para el desarrollo de este proyecto veremos la manera en la que podemos aprovisionar de seguridad y cifrado las llamadas realizadas entre extensiones IP."
              textoBoton="Ir a la documentación"
              linkGithub="https://docs.google.com/document/d/1lkQleyS9b3XMPqH9H7Y62aETx77hS8RbgSYsGsMf8Kw/edit?usp=drive_link"
            />
            <PortfolioCard
              imagenSrc="/images/Mercado-Libre.jpg"
              textoSuperior="Clon de Mercado Libre"
              textoInferior="Este es un clon del front de Mercado Libre en HTML y CSS."
              textoDialogoSuperior="Solo el front"
              textoDialogoInferior="Este front es estático y no tiene funcionalidades aun, pero en el futuro se conectara con un back."
              textoBoton="Ir a Github"
              linkGithub="https://github.com/ricardoosorioc/MercadoLibreClon.git"
            />
            <PortfolioCard
              imagenSrc="/images/android.jpg"
              textoSuperior="Aplicación de Cine"
              textoInferior="Proyecto que busca simular una app de un Cinema en Android."
              textoDialogoSuperior="Finalizado"
              textoDialogoInferior="Puede observarlo en el github."
              textoBoton="Ir a Github"
              linkGithub="https://github.com/ricardoosorioc/CinemaPreview.git"
            />
          </div>
        </section>
        <footer className=" bg-white mx-8 flex flex-col items-center mt-6 mb-1">
          <p className="mt-4">2023 Todos los derechos reservados</p>
          <p className="mt-4">¡Gracias por visitar mi currículum!</p>
        </footer>
      </main>
      <aside className=" bg-white w-24 flex flex-col items-center py-6 h-screen fixed top-0 right-0">
        <div className="flex flex-col items-center">
          <span className=" font-bold">Links</span>
          <ButtonIcon
            link="https://www.linkedin.com/in/ricardo-osorio-castro-56b741293"
            icon={AiFillLinkedin}
          />
          <ButtonIcon
            link="https://github.com/ricardoosorioc"
            icon={AiFillGithub}
          />
        </div>
      </aside>
      <MobileMenu />
    </div>
  );
};

export default Home;
