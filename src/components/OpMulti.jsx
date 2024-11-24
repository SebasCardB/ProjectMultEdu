import React, { useState } from "react";
import CodeExample from './CodeExample';



function OpMulti() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Operaciones: Multiplicación</h1>
      </div>

      <div className="description-section" >
      <p style={{ textAlign: 'justify' }}>
      Ahora has aprendido sobre las variables numéricas, de texto y booleanas, estás preparado para avanzar hacia temas más avanzados como 
      operadores matemáticos, condicionales y bucles. Este conocimiento básico será la base para comprender cómo se toman decisiones y se realiza procesamiento 
      lógico en los programas de Python.
        </p>
      <h2>Introducción a las operaciones matemáticas con Python</h2>
      <p>
      En este módulo, los estudiantes aprenderán las operaciones matemáticas básicas: suma, resta, multiplicación y división, utilizando variables 
      numéricas en Python. Este conocimiento es esencial para realizar cálculos en cualquier aplicación.
      </p>
      </div>

      {/* Contenedor de pestañas */}
      <div className="tabs">
        <button
          className={`tab ${activeTab === "text" ? "active" : ""}`}
          onClick={() => setActiveTab("text")}
        >
          Descripción
        </button>
        <button
          className={`tab ${activeTab === "examples" ? "active" : ""}`}
          onClick={() => setActiveTab("examples")}
        >
          Ejemplos
        </button>
        <button
          className={`tab ${activeTab === "videos" ? "active" : ""}`}
          onClick={() => setActiveTab("videos")}
        >
          Videos
        </button>
        <button
          className={`tab ${activeTab === "game" ? "active" : ""}`}
          onClick={() => setActiveTab("game")}
        >
          Minijuego
        </button>
      </div>

      {/* Contenido dinámico basado en pestañas */}
      <main className="variables-content">
        {activeTab === "text" && (
          <section className="description-section">
            <h2>¿Qué es la multiplicación</h2>
            <p>
            La multiplicación <b>permite calcular el producto de dos números</b>, o cuántas veces un valor contiene a otro. <b>En Python, se utiliza el operador *</b>.
            </p>
            <h2>¿Como funciona la multiplicación en Python?</h2>
            <p>
              La sintaxis básica para la multiplicación es sencilla:
              <CodeExample codeString={`
print(4 * 5)  # Muestra: 20
              `} language="python" />
              <b>Con variables:</b>
              <CodeExample codeString={`
a = 3
b = 7
resultado = a * b
print("El producto es:", resultado)  # Muestra: 21
              `} language="python" />
            </p>
            <h2>Aplicaciones de la multiplicación</h2>
            <p>
              <ul>
                <li><b>Negocios: </b>Calcular el precio total de productos comprados.</li>
                <li><b>Cálculos físicos: </b>Determinar áreas, volúmenes o distancias.</li>
                <li><b>Matemáticas: </b> Resolveer problemas de escalas y proporciones.</li>
              </ul>
            </p>
          </section>
        )}
        {activeTab === "videos" && (
          <section className="videos-section">
            <h2>Videos relacionados</h2>
            <p>
              Aquí puedes agregar contenido relacionado con videos sobre variables numéricas.
            </p>
          </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplo práctico</h2>
            <p>
            Supongamos que necesitas calcular cuántos panes puedes hornear con cierta cantidad de ingredientes.
            <CodeExample codeString={`
cantidad_harina = 2.5  # Harina en kilogramos
panes_por_kg = 4

total_panes = cantidad_harina * panes_por_kg
print("Puedes hornear:", total_panes, "panes.")  # Muestra: 10
              `} language="python" />
            </p>
            <h2>Actividad práctica</h2>
            <p>Escribe un programa que:
              <ol>
                <li>Solicite al usuario el precio de un artículo.</li>
                <li>Pregunte cuántos artículos quiere comprar.</li>
                <li>Calcule y muestre el costo total.</li>
              </ol>
            </p>
          </section>
        )}
        {activeTab === "game" && (
          <section className="game-section">
            <h2>Minijuego</h2>
            <div className="operations-panel">
              <iframe
                src="/Unity_Game01/index.html"
                title="Minijuego de Variables"
                className="unity-frame"
              ></iframe>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default OpMulti;