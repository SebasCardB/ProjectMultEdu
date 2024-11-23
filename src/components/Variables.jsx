import React from "react";
import "./Variables.css";

function Variables() {
  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Variable: Lorem</h1>
      </div>

      <main className="variables-content">
        

        
          <div className="operations-panel">
            {/* Juego de Unity */}
            <iframe
              src="/Unity_Game01/index.html"
              title="Minijuego de Variables"
              className="unity-frame"
            ></iframe>
          </div>
       
      </main>

      <section className="description-section">
        <h2>¿Qué es Lorem Ipsum?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo.
          Curabitur eu tristique felis, eget hendrerit augue. Nulla ut condimentum eros.
          Interdum et malesuada fames ac ante ipsum primis in faucibus...
        </p>
      </section>

      <section className="examples-section">
        <h2>Ejemplos de Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo.
          Curabitur eu tristique felis, eget hendrerit augue. Nulla ut condimentum eros.
          Interdum et malesuada fames ac ante ipsum primis in faucibus...
        </p>
      </section>
    </div>
  );
}

export default Variables;