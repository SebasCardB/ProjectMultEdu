import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoMain from './adds/logo.png';

const Main = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const navigate = useNavigate();
  const [sectionIndex, setSectionIndex] = useState(0);

  const sections = [
    {
      title1: "¡Bienvenido Mundo!",
      image: logoMain, 
      title2: "¿Qué es PyExplorer?",
      content: "PyExplorer es una herramienta educativa interactiva diseñada para facilitar el aprendizaje de programación en Python. Este recorrido te permitirá dominar los fundamentos de Python a través de minijuegos y actividades prácticas."
    },
    {
      title1: "¿Por qué PyExplorer?",
      image: logoMain, 
      title2: "Meta Instruccional",
      content: "El estudiante al usar PyExplorer será capaz de emplear los conceptos básicos de programación de python en contextos y aplicaciones de su aprendizaje universitario.",
      title3: "Necesidad Educativa",
      content2: "Los estudiantes de Ingeniería en Multimedia enfrentan dificultades en programación debido a métodos tradicionales. Un OVA con gamificación y retroalimentación inmediata facilitaría la comprensión visual y mejoraría su aprendizaje."
    },
    {
      title1: "¿Qué es Python?",
      image: logoMain, 
      title2: "Definición",
      content: "Python es un lenguaje de programación potente y fácil de aprender. Tiene estructuras de datos de alto nivel eficientes y un simple pero efectivo sistema de programación orientado a objetos. La elegante sintaxis de Python y su tipado dinámico, junto a su naturaleza interpretada lo convierten en un lenguaje ideal para scripting y desarrollo rápido de aplicaciones en muchas áreas, para la mayoría de plataformas."
    },
    {
      title1: "Aplicaciones de Python",
      image: logoMain, 
      title2: "Desarrollo web",
      content: "Python es ampliamente utilizado para crear aplicaciones web dinámicas. Frameworks como Django y Flask permiten a los desarrolladores crear sitios web seguros y escalables rápidamente. Python gestiona tanto el backend de las aplicaciones (servidor, bases de datos, procesamiento de solicitudes) como integraciones con frontend."
    },
    {
      title1: "Aplicaciones de Python",
      image: logoMain, 
      title2: "Inteligencia artificial",
      content: "Python es el lenguaje líder para el desarrollo de modelos de aprendizaje automático e inteligencia artificial. Librerías como TensorFlow, Keras y Scikit-learn facilitan la creación de redes neuronales, procesamiento de lenguaje natural y análisis predictivo, siendo una herramienta fundamental para la investigación y el desarrollo en IA."
    },
    {
      title1: "Aplicaciones de Python",
      image: logoMain, 
      title2: "Análisis de datos",
      content: "Python es una herramienta esencial para el análisis de grandes cantidades de datos. Librerías como Pandas, NumPy y Matplotlib permiten la manipulación, análisis y visualización de datos. Python es utilizado para obtener información valiosa a partir de conjuntos de datos masivos en diversas industrias como finanzas, salud y marketing."
    },
    {
      title1: "Aplicaciones de Python",
      image: logoMain, 
      title2: "Videojuegos",
      content: "Python también se usa en la creación de videojuegos, especialmente para prototipos y pequeños juegos. Librerías como Pygame permiten desarrollar gráficos, animaciones y gestionar la lógica de los juegos. Además, algunos motores de juegos como Unity soportan el uso de Python en scripts para controlar ciertos aspectos del juego."
    },

  ];


  const handleNextSection = () => {
    setSectionIndex((prevIndex) => (prevIndex + 1) % sections.length);
  };

  const handlePreviousSection = () => {
    setSectionIndex((prevIndex) => (prevIndex - 1 + sections.length) % sections.length);
  };

  const menuOptions = {
    variables: [
      { name: 'Variables de tipo numéricas', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M540.67-345.33h66.66v-403.34H458.67V-682h82v336.67ZM280-213.33q-27 0-46.83-19.84Q213.33-253 213.33-280v-533.33q0-27 19.84-46.84Q253-880 280-880h533.33q27 0 46.84 19.83Q880-840.33 880-813.33V-280q0 27-19.83 46.83-19.84 19.84-46.84 19.84H280Zm0-66.67h533.33v-533.33H280V-280ZM146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-600h66.67v600h600V-80h-600ZM280-813.33V-280v-533.33Z"/></svg> },
      { name: 'Variables de texto', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M261.33-240H334l44.67-123.33H582L626.67-240h72L515.33-720H444L261.33-240Zm139.34-183.33 78-219.34h2.66l78 219.34H400.67ZM146.67-80q-27 0-46.84-19.83Q80-119.67 80-146.67v-666.66q0-27 19.83-46.84Q119.67-880 146.67-880h666.66q27 0 46.84 19.83Q880-840.33 880-813.33v666.66q0 27-19.83 46.84Q840.33-80 813.33-80H146.67Zm.66-66.67H814v-666.66H147.33v666.66Zm0-666.66v666.66-666.66Z"/></svg> },
      { name: 'Variables booleanas', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="m828.33-36.67-116-116Q663-118 604.5-99T480-80q-84.33 0-157.33-30.83-73-30.84-127-84.84t-84.84-127Q80-395.67 80-480q0-66 19-124.5t53.67-107.83L26.33-838.67 74-886.33l802 802-47.67 47.66ZM480-146.67q51.67 0 97.83-14.33Q624-175.33 664-201L494.33-370.67 422-297.33 255.33-464.67 304-513.33l118 118 23.67-24L201-664q-25.67 40-40 86.17-14.33 46.16-14.33 97.83 0 141 96.16 237.17Q339-146.67 480-146.67ZM807.67-248l-48.34-48.33Q785-336 799.17-382.17q14.16-46.16 14.16-97.83 0-141-96.16-237.17Q621-813.33 480-813.33q-51.67 0-97.83 14.16Q336-785 296.33-759.33L248-807.67Q297.33-842 355.83-861T480-880q83.67 0 156.67 31.17 73 31.16 127 85.16t85.16 127Q880-563.67 880-480q0 65.67-19 124.17T807.67-248Zm-217-218-49.34-48.67 114-114L704.67-580l-114 114ZM528-528Zm-95.33 95.33Z"/></svg> },
      { name: 'Minijuego Variables', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z"/></svg> }
    ],
    operaciones: [
      { name: 'Suma', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg> },
      { name: 'Resta', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M200-440v-80h560v80H200Z"/></svg> },
      { name: 'Multiplicación', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg> },
      { name: 'División', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B" transform="rotate(45)"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z"/></svg> },
      { name: 'Minijuego Operaciones', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z"/></svg> }
    ],
    ciclos: [
      { name: 'Ciclo For', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M478-120q-145.33 0-248.83-100.83-103.5-100.84-108.5-246.5H188q4.67 118 88.17 199.33 83.5 81.33 201.83 81.33 123.67 0 209.5-86.5t85.83-210.16q0-121.67-86.5-205.84-86.5-84.16-208.83-84.16-68.33 0-128 31.33t-102.67 84H354v66.67H134.67V-810h66.66v102q51.67-62 123.84-97 72.16-35 152.83-35 75 0 140.83 28.17 65.84 28.16 115 76.66Q783-686.67 811.5-621.5T840-481.33q0 75-28.5 140.83-28.5 65.83-77.67 114.67-49.16 48.83-115 77.33Q553-120 478-120Zm122.67-195.33-153.34-152V-682H514v187.33l134 132-47.33 47.34Z"/></svg> },
      { name: 'Ciclo While', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M198.67-326.67Q178-363.33 169-401t-9-77q0-132 94-226.33 94-94.34 226-94.34h31l-74.67-74.66L481-918l152.67 152.67L481-612.67 435.67-658l74-74H480q-104.67 0-179 74.5T226.67-478q0 28 5.66 53.67 5.67 25.66 15 49l-48.66 48.66ZM477.67-40 325-192.67l152.67-152.66 44.66 44.66L447.67-226H480q104.67 0 179-74.5T733.33-480q0-28-5.33-53.67-5.33-25.66-16-49l48.67-48.66q20.66 36.66 30 74.33 9.33 37.67 9.33 77 0 132-94 226.33-94 94.34-226 94.34h-32.33l74.66 74.66L477.67-40Z"/></svg> },
      { name: 'Ciclo Do While', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M433.33-82Q360-90.67 296.5-124.5q-63.5-33.83-110-86.67Q140-264 113.33-332.67 86.67-401.33 86.67-480q0-89 39.83-168T234-786.67H120.67v-66.66h232.66v232.66h-66.66V-743q-61 48.67-97.17 117.17T153.33-480q0 129 80.17 221.17 80.17 92.16 199.83 109.16V-82ZM423-305.33l-159.67-160L310-512l113 113 227-227 46.67 47L423-305.33Zm183.67 198.66v-232.66h66.66V-217q61-49.67 97.17-117.67T806.67-480q0-129-80.17-221.17-80.17-92.16-199.83-109.16V-878q148 17 247.33 128.67Q873.33-637.67 873.33-480q0 89-39.83 168T726-173.33h113.33v66.66H606.67Z"/></svg> },
      { name: 'Minijuego Ciclos', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z"/></svg> }
    ],
    condicionales: [
      { name: 'If', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B" transform="rotate(90)"> <path d="M676-160 444-392v-319L328-595l-47.67-47.67 197-197L674-643l-47.67 47.67L510.67-711v291.67l212 212L676-160Zm-395.33.33L233.33-207l150.34-150.67L431.33-310 280.67-159.67Z"/> </svg> },
      { name: 'Else', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B" transform="rotate(90)"> <path d="M448-160v-305.33L226.67-686.67V-570H160v-230h230v66.67H274l240.67 240.66V-160H448Zm126.67-368-47.34-47.33 158.67-158H570V-800h230v230h-66.67v-116.67L574.67-528Z"/> </svg> },
      { name: 'Elif', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M480-80 314.67-245.33 363-293.67 446.67-210v-181.33h66.66v181L596.67-294l48.66 48.67L480-80ZM242-318 80-480l162.33-162.33L290.67-594 210-513.33h181.33v66.66h-181l80.34 80L242-318Zm476 0-48.33-48.33L750-446.67H569.33v-66.66h180.34l-80.34-80L718-642l162 162-162 162ZM446.67-569.33V-750l-80.34 80.33L318-718l162-162 162 162-48.33 48.33L513.33-750v180.67h-66.66Z"/></svg> },
      { name: 'Switch', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M146.67-496.33q0 82.33 57.5 138.33 57.5 56 139.16 58l-64.66-66 46.66-46.67 144 146-146 146.67-46.66-46.67 64-66q-108.34-2-184.5-78Q80-386.67 80-496q0-109 74.83-186.5 74.84-77.5 182.5-77.5h148v66.67h-148q-79.66 0-135.16 57.66-55.5 57.67-55.5 139.34ZM568-232.67v-66.66h312v66.66H568Zm0-230V-530h312v67.33H568Zm-16-230.66V-760h328v66.67H552Z"/></svg> },
      { name: 'Minijuego Condicionales', icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M189-160q-60 0-102.5-43T42-307q0-9 1-18t3-18l84-336q14-54 57-87.5t98-33.5h390q55 0 98 33.5t57 87.5l84 336q2 9 3.5 18.5T919-306q0 61-43.5 103.5T771-160q-42 0-78-22t-54-60l-28-58q-5-10-15-15t-21-5H385q-11 0-21 5t-15 15l-28 58q-18 38-54 60t-78 22Zm2.78-66.67q22.55 0 41.5-11.98Q252.22-250.63 262-271l28-57q13.67-27.67 39-43.17t56-15.5h190q30.67 0 56 16T671-328l28 57q9.78 20.37 28.72 32.35 18.95 11.98 41.45 11.98 33.16 0 57.16-22.5t25-55.83q0-2.33-2.66-22.33l-84-335q-7.67-31-32.27-51t-57.4-20H285q-32.47 0-57.4 19.66-24.93 19.67-32.27 51.34l-84 335q-1.33 4.66-2.66 21.33 0 33.66 24.34 56.5 24.33 22.83 58.77 22.83Zm348.34-300q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm0 160q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm80-80q14.21 0 23.71-9.61 9.5-9.62 9.5-23.84 0-14.21-9.61-23.71-9.62-9.5-23.84-9.5-14.21 0-23.71 9.61-9.5 9.62-9.5 23.84 0 14.21 9.61 23.71 9.62 9.5 23.84 9.5Zm-360.04 63.34q11.59 0 19.09-7.56 7.5-7.55 7.5-19.11v-43.33H410q11.56 0 19.11-7.58 7.56-7.58 7.56-19.17 0-11.59-7.56-19.09-7.55-7.5-19.11-7.5h-43.33V-630q0-11.56-7.58-19.11-7.58-7.56-19.17-7.56-11.59 0-19.09 7.56-7.5 7.55-7.5 19.11v43.33H270q-11.56 0-19.11 7.58-7.56 7.58-7.56 19.17 0 11.59 7.56 19.09 7.55 7.5 19.11 7.5h43.33V-490q0 11.56 7.58 19.11 7.58 7.56 19.17 7.56ZM480-480Z"/></svg> }
    ]
  };

  const descriptions = {
    variables: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M80-688.67v-84.66q0-26.34 19.83-46.5Q119.67-840 146.67-840h666.66q26.34 0 46.5 20.17Q880-799.67 880-773.33v84.66h-66.67v-84.66H146.67v84.66H80ZM326.67-120v-80h-180q-27 0-46.84-20.17Q80-240.33 80-266.67v-88.66h66.67v88.66h666.66v-88.66H880v88.66q0 26.34-20.17 46.5Q839.67-200 813.33-200h-180v80H326.67ZM480-522Zm-306.67 2 113.34-113.33L240-680 80-520l160 160 46.67-46.67L173.33-520Zm613.34 0L673.33-406.67 720-360l160-160-160-160-46.67 46.67L786.67-520Z"/></svg>,
      title: 'Variables',
      description: 'Aprende a almacenar y gestionar información clave. Descubre cómo las variables organizan datos y hacen tu código más dinámico.'
    },
    operaciones: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M316-232h53.33v-85.33h85.34v-53.34h-85.34V-456H316v85.33h-85.33v53.34H316V-232Zm210-33.33h200.67V-318H526v52.67ZM526-370h200.67v-53.33H526V-370Zm39.33-159.33 59.34-59.34L684-529.33l38-38-59.33-60L722-686.67l-38-38-59.33 59.34-59.34-59.34-38 38 59.34 59.34-59.34 60 38 38ZM244-600.67h197.33V-654H244v53.33ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>,
      title: 'Operaciones',
      description: 'Explora herramientas matemáticas y lógicas para crear cálculos y resolver problemas de manera eficiente.'
    },
    ciclos: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="M339.33-105q-114-42.67-186.66-143.67-72.67-101-72.67-231 0-30 3.83-59.66Q87.67-569 97-597.67L39-564 5.67-621l179-103.33 103.33 178L230-513l-56.67-97.33q-13 31-19.83 63.66-6.83 32.67-6.83 67 0 109.67 63.33 195.84 63.33 86.16 163.33 120.16l-34 58.67Zm294-508.33V-680h113Q699-743 629-778.17q-70-35.16-149-35.16-64.33 0-120.33 22.33t-100.34 62l-34-59.33q52.67-43 117.34-67.34Q407.33-880 480-880q85 0 160.67 33.5Q716.33-813 773.33-751v-69H840v206.67H633.33ZM594.67 0l-179-103.33 103.33-178L576-248l-57.67 100q126-14.33 210.5-109t84.5-223q0-17.67-1.83-33.83-1.83-16.17-5.83-32.84H874q3 16.67 4.5 33.17T880-480q0 140.33-86.5 249.17Q707-122 571.33-90.33L628-57 594.67 0Z"/></svg>,
      title: 'Ciclos',
      description: 'Domina la automatización de tareas repetitivas con bucles y optimiza procesos sin esfuerzo manual.'
    },
    condicionales: {
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B" transform="rotate(90)"> <path d="M446.67-80v-200q0-50.67-16.34-80.33Q414-390 382.67-420.67l47.66-47.66q12.67 11 26 27.83 13.34 16.83 23.67 32.17 16-23.67 31.83-41.17 15.84-17.5 30.84-30.83 51.33-43 78.66-102.67 27.34-59.67 24-170l-81 81-47-46.67L678.67-880 840-718.67 793.33-672 712-753q2.67 131.67-31 200.17t-93.67 123.16q-40 36.34-57 67.5-17 31.17-17 82.17v200h-66.66Zm-192-555q-4-18.67-6.17-49.67t-1.17-67.66L166.67-672 120-718.67 281.33-880l161.34 161.33-47 46.67-81-80.67q-1.34 32.34 0 57.5 1.33 25.17 4.66 44.5L254.67-635Zm84.66 172.67q-18-19-37.83-48t-31.83-66l65-16.34Q344-567 358.33-545.33q14.34 21.66 28 36l-47 47Z"/> </svg>,
      title: 'Condicionales',
      description: 'Descubre cómo tomar decisiones inteligentes y controlar el flujo de tu programa según diferentes condiciones.'
    }
  };

  const openMenu = (menu) => {
    setActiveMenu(menu);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  const handleMenuItemClick = (item) => {
    console.log(`Seleccionaste: ${item}`);
    
    switch (item) {
      case 'Variables de tipo numéricas':
        navigate('/varnum');    
        break;
      case 'Variables de texto':
        navigate('/varbool'); 
        break;
      case 'Variables booleanas':
        navigate('/vartexto'); 
        break;
      case 'Suma':
        navigate('/opsuma');  
        break;
      case 'Resta':
        navigate('/opresta');  
        break;
      case 'Multiplicación':
        navigate('/opmulti');  
        break;
      case 'División':
        navigate('/opdivi');  
        break;
      case 'Ciclo For':
        navigate('/proximamente');
        break;
      case 'Ciclo While':
        navigate('/proximamente');
        break;
      case 'Ciclo Do While':
        navigate('/proximamente');
        break;
      case 'If':
        navigate('/proximamente');
        break;
      case 'Else':
        navigate('/proximamente');
        break;
      case 'Elif':
        navigate('/proximamente');
        break;
      case 'Switch':
        navigate('/proximamente');
        break;
      
      case 'Minijuego Variables':
        navigate('/minivar');
        break;
      case 'Minijuego Operaciones':
        navigate('/miniop');
        break;
      case 'Minijuego Ciclos':
        navigate('/proximamente');
        break;
      case 'Minijuego Condicionales':
        navigate('/proximamente');
        break;
    
      default:
        navigate('/');
    }
  };

  return (
    <div className="main">
      <div className="main-content">
        <div className="sidebar">
          {Object.keys(descriptions).map((key) => (
            <button 
              key={key} 
              onClick={() => openMenu(key)} 
              className={`menu-button ${activeMenu === key ? 'active' : ''}`}
            >
              <div className="icon">{descriptions[key].icon}</div>
              <div className="title">{descriptions[key].title}</div>
              <div className="description">{descriptions[key].description}</div>
            </button>
          ))}
        </div>

        <div className="content">
          {activeMenu ? (
            <div className="submenu">
              <button onClick={closeMenu} className="close-button"><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFE98B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button>
              {menuOptions[activeMenu].map((option, index) => (
                <button
                  key={index} 
                  onClick={() => handleMenuItemClick(option.name)} 
                  className={`submenu-item ${(option.name === 'Minijuego Variables' || option.name === 'Minijuego Operaciones' || option.name === 'Minijuego Ciclos'|| option.name === 'Minijuego Condicionales') ? 'minijuego-highlight' : ''}`}

                >
                  <span className="submenu-text">{option.name}</span>
                  <span className="submenu-icon">{option.icon}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="content-initial">
              <div className='subcontent'>
                <h1>{sections[sectionIndex].title1}</h1>
                <img 
                  src={sections[sectionIndex].image} 
                  alt={sections[sectionIndex].title1} 
                  className="main-logo"
                />
                <h2>{sections[sectionIndex].title2}</h2>
                <p style={{ textAlign: 'justify' }}>{sections[sectionIndex].content}</p>
                <h2>{sections[sectionIndex].title3}</h2>
                <p style={{ textAlign: 'justify' }}>{sections[sectionIndex].content2}</p>
              </div>
              <div className="buttons-nextprev">
                <button 
                  onClick={handlePreviousSection} 
                  className="navigation-button"
                >
                  Anterior
                </button>
                <div className="indicators">
                  {sections.map((_, index) => (
                    <span
                      key={index}
                      className={`indicator ${index === sectionIndex ? 'active' : ''}`}
                    />
                  ))}
                </div>
                <button 
                  onClick={handleNextSection} 
                  className="navigation-button"
                >
                  Siguiente
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
