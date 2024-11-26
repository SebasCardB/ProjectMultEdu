import React, { useState } from "react";
import CodeExample from './CodeExample';


function OpDivi() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Operaciones: División</h1>
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
            <h2>¿Qué es la división?</h2>
            <p>
            La división <b>calcula cuántas veces un número puede dividir a otro</b>. En Python,<b> se usa el operador / para divisiones con decimales.</b>
            </p>
            <h2>¿Cómo funciona la división en Python</h2>
            <p>La división básica es simple:
            <CodeExample codeString={`
print(10 / 2)  # Muestra: 5.0
              `} language="python" />
              <b>Con variables: </b>
              <CodeExample codeString={`
a = 20
b = 4
resultado = a / b
print("El resultado es:", resultado)  # Muestra: 5.0
              `} language="python" />
            </p>
            <h2>Aplicaciones de la división</h2>
            <p>
            La división es una operación fundamental con numerosas aplicaciones prácticas en programación y en problemas del mundo real. 
            Algunas de estas aplicaciones incluyen:
            <ol>
              <li><b>Reparto equitativo: </b>La división se usa para dividir un recurso entre varias personas o grupos de manera equitativa. </li>
              <li><b>Promedios: </b>El cálculo de promedios utiliza la división para encontrar el valor medio de un conjunto de números. Es útil en educación, 
              estadísticas, deportes y más.</li>
              <li><b>Conversión de unidades: </b>La división se usa para convertir unidades. Por ejemplo, convertir segundos a minutos o calcular
              la distancia promedio por unidad de tiempo.</li>
            </ol>
            </p>
            <h2>Operación de Módulo en Python</h2>
            <p>
            Adicional a lo anterior, hay una operación derivada de la división. Se trata del módulo, que <b>calcula el resto o residuo de una división </b>
            entre dos números. <b>En Python, se utiliza el operador %.</b>
            </p>
            <h3>¿Cómo funciona?</h3>
            <p>Cuando divides un número a entre otro número b, el módulo es el valor que sobra después de realizar la división entera. Es decir:
            <ul><li>Módulo <b>(a % b)</b> = Residuo de la división <b>(a / b)</b></li></ul>
            </p>
            
            <h3>¿Cuando se usa el módulo?</h3>
            <p>
            <ol>
              <li><b>Verificar divisibilidad: </b>Si el resultado de <b>a % b</b> es 0, significa que a es divisible por b.</li>
              <li><b>Cálculos en bucles y secuencias: </b>Por ejemplo, para determinar si un numero es par o impar</li>
              <li><b>Aplicaciones prácticas: </b>Ciclos de relojes (horas, minutos). Trabajar con índices de arreglos circulares.</li>
            </ol>
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
          <h3>Operaciones: Multiplicación</h3>
          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/NRX6KvEP-u8?si=q1IkiA2zn51LVnmR&start=84&end=171" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplo práctico</h2>
            <p>
              Imagina que debes repartir $10.000 entre 4 personas:
              <CodeExample codeString={`
monto_total = 10000
personas = 4
monto_por_persona = monto_total / personas
print("Cada persona recibe:", monto_por_persona)  # Muestra: 2500.0
              `} language="python" />
              Ahora imagina que necesitas calcular la nota promedio de tres calificaciones.
              <CodeExample codeString={`
nota1 = 85
nota2 = 90
nota3 = 88

promedio = (nota1 + nota2 + nota3) / 3
print("El promedio de las notas es:", promedio)  # Muestra: 87.66666666666667
              `} language="python" />
            </p>
            <h2>Actividad práctica</h2>
            <p>
              Escribe un programa que:
              <ol>
                <li>Solicite el monto total de una compra. </li>
                <li>Pregunte cuántas personas van a compartir el pago.</li>
                <li>Calcule cuánto debe pagar cada persona.</li>
              </ol>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default OpDivi;