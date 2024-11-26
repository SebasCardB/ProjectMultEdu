import React from 'react';
import './Proximamente.css';

const Proximamente = () => {

  // Función para volver a la página anterior
  const goHome = () => {
    window.location.href = '/'; // Redirige a la pantalla principal
  };


  return (
    <div className="proximamente-page">
      <div className="content-proximamente">
        <h1>Próximamente</h1>
      </div>
      <div className="button-proximamente">
        <button onClick={goHome} className="prox-button">
          Volver
        </button>
      </div>
    </div>
  );
};

export default Proximamente;
