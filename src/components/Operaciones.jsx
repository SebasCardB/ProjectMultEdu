import React from 'react';
import './Operaciones.css';

function Variables() {
  return (
    <div className="variables-page">

      <main className="variables-content">
          <div className="operations-panel">
            {/* Juego de Unity */}
            <iframe
              src="/Unity_Game02/index.html"
              title="Minijuego de Operaciones"
              className="unity-frame"
            ></iframe>
          </div>
      </main>


      <section className="description-section">
        <h2>¿Qué es Lorem Ipsum? Puto el malparido de kosch</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo. Curabitur eu tristique felis, eget hendrerit augue.
          Nulla ut condimentum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus...
        </p>
      </section>

      <section className="examples-section">
        <h2>Ejemplos de Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo. Curabitur eu tristique felis, eget hendrerit augue.
          Nulla ut condimentum eros. Interdum et malesuada fames ac ante ipsum primis in faucibus...
        </p>
      </section>

    </div>
  );
}

export default Variables;
