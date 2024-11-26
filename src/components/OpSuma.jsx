import React, { useState } from "react";
import CodeExample from './CodeExample';


function OpSuma() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Operaciones: Suma</h1>
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
            <h2>¿Qué es la suma en python?</h2>
            <p>
            La suma es una operación matemática que permite combinar dos o más valores para obtener un resultado. En Python, el operador para sumar es el signo +.
            Para almacenar los resultados de una suma normalmente se puede usar una variable.
            </p>
            <h3>Sintaxis básica</h3>
            <p>
              Para sumar dos números en Python:
              <CodeExample codeString={`
# Suma de dos números
resultado = 5 + 3
print(resultado)  # Muestra: 8
              `} language="python" />

              Si usamos variables, el código es similar. Simplemente las sumamos.

              <CodeExample codeString={`
a = 10
b = 20
suma = a + b
print("El resultado de la suma es:", suma)  # Muestra: 30
              `} language="python" />
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
            <h3>Operaciones: Suma</h3>
            <div class="Videos">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NRX6KvEP-u8?si=q1IkiA2zn51LVnmR&start=15&end=30" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplo práctico</h2>
            <p>
              Imagina que necesitas calcular el total de un carrito de compras. Puedes sumar los precios de los artículos así:
              <CodeExample codeString={`
precio1 = 15.5
precio2 = 20.0
precio3 = 12.75

total = precio1 + precio2 + precio3
print("El total a pagar es:", total)  # Muestra: 48.25
              `} language="python" />
            </p>
            <h2>Actividad práctica</h2>
            <p>
            Crea un programa que:
            <ol>
              <li>Solicite al usuario dos numeros</li>
              <li>Calcule su <b>suma</b></li>
              <li>Imprima su resultado</li>
            </ol>
            <b>Nota: </b>Para solicitar datos al usuario en el punto 1 de este ejercicio, te mostramos este ejemplo:
            <CodeExample codeString={`
# Solicitar números al usuario
numero1 = float(input("Introduce el primer número: "))
numero2 = float(input("Introduce el segundo número: "))
              `} language="python" />
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default OpSuma;