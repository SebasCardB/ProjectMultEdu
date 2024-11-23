import React from 'react';
import './Operaciones.css';

function Variables() {
  return (
    <div className="variables-page">

      <main className="variables-content">
        <section className="sidebar2">
          <div className="code-languages">
            <p>&lt;&gt;</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>JS</p>
            <p>PHP</p>
          </div>
        </section>

        <section className="main-panel">
          <div className="operations-panel">
            <div className="operation-icon">1</div>
            <div className="operation-icon">60</div>
            <div className="operation-icon">A</div>
            <div className="operation-icon">10s</div>
            <div className="operation-icon">+2</div>
            <div className="operation-box">9K</div>
          </div>
        </section>
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
