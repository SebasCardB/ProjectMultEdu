import React, { useState } from "react";
import CodeExample from './CodeExample';

function OpResta() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Operaciones: Resta</h1>
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
      </div>

      {/* Contenido dinámico basado en pestañas */}
      <main className="variables-content">
        {activeTab === "text" && (
          <section className="description-section">
            <h2>¿Qué es la resta?</h2>
            <p>
              La resta permite calcular la diferencia entre dos números, respondiendo preguntas como "¿Cuánto queda si quitas un valor a otro?". 
              En Python, el operador de resta es el signo -.
            </p>
            <h2>¿Cómo funciona la resta en Python?</h2>
            <p>
              Para realizar una resta, solo necesitas el operarador <b>-</b> entre dos valores o variables.
              <b>Ejemplo simple:</b>
              <CodeExample codeString={`
print(15 - 5)  # Muestra: 10
              `} language="python" />
              <b>Usando variables:</b>
              <CodeExample codeString={`
a = 20
b = 5
resta = a - b
print("El resultado de la resta es:", resta)  # Muestra: 15
              `} language="python" />
              <b>Con más de dos valores:</b>
              <CodeExample codeString={`
a = 50
b = 20
c = 10

resultado = a - b - c
print("El resultado es:", resultado)  # Muestra: 20
              `} language="python" />
            </p>
            <h2>Aplicaciones de la resta</h2>
            <p>
              <ul>
                <li><b>Finanzas: </b>calcular el dinero restante después de un gasto.</li>
                <li><b>Logística: </b>Determinar la diferencia entre el inventario inicial y las ventas.</li>
                <li><b>Cálculos personales: </b>Calcular cuántos días faltan para una fecha específica. </li>
              </ul>
            </p>
          </section>
        )}
        {activeTab === "videos" && (
          <section className="videos-section">
          <h2>Videos relacionados</h2>
          <h3>Operaciones Básicas Python</h3>

          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/qEHoh9-uiY0?si=V2t7osdO-GPGHx8A" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Operaciones: Resta</h3>
          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NRX6KvEP-u8?si=q1IkiA2zn51LVnmR&start=30&end=39" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplo práctico</h2>
            <p>
            Supongamos que estás planeando un viaje y quieres saber cuánto dinero te quedará después de los gastos.
            <CodeExample codeString={`
presupuesto = 1000.0
gastos_transporte = 200.0
gastos_comida = 150.0

dinero_restante = presupuesto - gastos_transporte - gastos_comida
print("Dinero restante:", dinero_restante)  # Muestra: 650.0
              `} language="python" />
            </p>
            <h2>Actividad práctica</h2>
            <p>
            Crea un programa que:
            <ol>
              <li>Solicite al usuario su presupuesto inicial.</li>
              <li>Solicite el monto de un gasto.</li>
              <li>Calcule cuánto dinero queda y lo muestre.</li>
            </ol>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default OpResta;