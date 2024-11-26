import React from 'react';
import './Minijuegos.css';

const MiniOperaciones = () => {

  // Función para volver a la página anterior
  const goHome = () => {
    window.location.href = '/'; // Redirige a la pantalla principal
  };


  return (
    <div className='Minijuego-page'>
      <section className="game-section">
        <div className='title-game'>
          <h2>Minijuego: Operaciones</h2>
          <button onClick={goHome} className="mini-button">
          Volver
          </button>
        </div>
        <iframe
            src="/Unity_Game02/index.html"
            title="Minijuego de Variables"
            className="unity-frame"
          ></iframe>
      </section>


    </div>
  );
};

export default MiniOperaciones;
