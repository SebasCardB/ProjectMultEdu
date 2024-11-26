import React, { useState } from "react";
import CodeExample from './CodeExample';

function VarNumericas() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Variable: Numéricas</h1>
      </div>

      <div className="description-section" >

      <p style={{ textAlign: 'justify' }}>
      Este módulo tiene como objetivo introducir a los estudiantes al concepto de variables de manera progresiva, 
      con explicaciones detalladas y actividades prácticas que les permitan comprender su uso básico en programación. 
      Cada tema está diseñado para ser un prerequisito del siguiente, asegurando una comprensión lineal y sólida.
        </p>

      <h2>¿Qué son las variables en programación?</h2>
      
      <p style={{ textAlign: 'justify' }}>
      Las variables son contenedores de datos que permiten almacenar información en un programa. 
      En Python, una variable puede contener diferentes tipos de datos, como números, texto, valores booleanos, entre otros. 
      Esto hace que sean fundamentales para crear cualquier tipo de aplicación.
        </p>

      <p style={{ textAlign: 'justify' }}>
      Un ejemplo cotidiano sería imaginar una variable como una "caja" con una etiqueta (el nombre de la variable) 
      que guarda un valor. <b>Por ejemplo:</b>

      <ul>
        <li><b>Nombre de la caja:</b>     Edad</li>
        <li><b>Contenido de la caja:</b>  25</li>
      </ul>

        </p>


      <p style={{ textAlign: 'justify' }}>
      En Python, no necesitas declarar el tipo de dato explícitamente. Esto significa que, si colocas un número en una variable, 
      Python automáticamente sabe que es un número.
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

            <h2>Tipos de datos numéricos en Python</h2>

            <h3>a) Enteros (int)</h3>
            <p>
            <b>Son números sin decimales</b>, tanto positivos como negativos. Se utilizan para contar o realizar operaciones matemáticas 
            que no requieren fracciones o decimales. Ejemplos:
            <ul>
              <li>10 (positivo)</li>
              <li>-5 (negativo)</li>
              <li>0 (neutro)</li>
            </ul>
            </p>

            <h3>b) Flotantes (float)</h3>
            <p>
            <b>Son números con decimales</b>, también llamados números de punto flotante. Se utilizan para cálculos más precisos, 
            como mediciones, tasas o valores fraccionarios. Ejemplos:
            <ul>
              <li>3.14 (pi)</li>
              <li>-0.99 (negativo)</li>
              <li>0.0 (neutro con decimales)</li>
            </ul>
            </p>

            <h3>c) Números complejos (complex)</h3>
            <p>
            Son números que <b>incluyen una parte real y una imaginaria</b>, representados como <b>a + bj</b>. Este tipo es menos común, 
            pero se usa en campos como la física o la ingeniería.
            <ul>
              <li>3.14 (pi)</li>
              <li>-0.99 (negativo)</li>
              <li>0.0 (neutro con decimales)</li>
            </ul>
            </p>

            <h2>¿Qué hacen las variables numéricas?</h2>
            <p>
            Las variables numéricas permiten almacenar valores que se pueden usar para realizar cálculos matemáticos. Por ejemplo:
            <ul>
              <li>Sumar precios de productos.</li>
              <li>Calcular promedios o porcentajes.</li>
              <li>Resolver ecuaciones matemáticas.</li>
            </ul>
            </p>

            <h2>¿Cómo usar las variables numéricas?</h2>
            <h3>a) Creación de una variable</h3>
            <p>
           Para crear una variable, simplemente escribes un nombre seguido del operador de asignación (=) y luego el valor. 
            <b> Ejemplo:</b>
            <CodeExample codeString={`edad = 25  # Variable tipo entero
altura = 1.75  # Variable tipo flotante`} language="python" />
            </p>
            
            <h3>b) Nombres de las variables</h3>
            <p>
            Es importante dar nombres descriptivos a las variables para que el código sea más fácil de leer.
            <b> Ejemplo:</b>
            <CodeExample codeString={`# Malo:
x = 5

# Bueno:
edad_usuario = 25
`} language="python" />
            </p>

            <h3>c) Impresión de variables</h3>
            <p>
            Para ver el valor de una variable, usa la función print().
            <b> Ejemplo:</b>
            <CodeExample codeString={`print(edad_usuario)  # Muestra: 25`} language="python" />
            </p>
            

            <h3>d) Reasignación de valores</h3>
            <p>
            Puedes cambiar el valor de una variable en cualquier momento:
            <b> Ejemplo:</b>
            <CodeExample codeString={`edad_usuario = 25
edad_usuario = 26  # Ahora la variable contiene el valor 26
`} language="python" />
            </p>
            
            <h3>
            En las siguientes secciones de PyExplorer, aprenderás como darle uso a las variables para hacer operaciones matématicas,
            ciclos, condiciones ¡y un montón más de funcionalidades!
            </h3>

          </section>
        )}
        {activeTab === "videos" && (
          <section className="videos-section">
          <h2>Videos relacionados</h2>
          <h3>¿Qué es una variable?</h3>

          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lMgLkjXpfAQ?si=dVQelQGOg0fMYVMq&start=18&end=100" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <h3>Tipos de variables</h3>
          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ERIzuf3kGv8?si=RWAZ55dfhQBdcKvt" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <h3>Variables Numericas</h3>
          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/vMbvum1CSXI?si=PC0k7hrT2lfcpSR-" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplo práctico</h2>
            <p>
            Supongamos que quieres mostrar tu edad y altura:
            <CodeExample codeString={`# Asignación de valores a variables
edad = 25      # Entero
altura = 1.75  # Flotante

# Salida
print("Mi nombre es Juan Esteban")
print("Mi edad es:", doble_edad) # Salida: 25
print("Y mido:", altura_metros) # Salida: 1.75

`} language="python" />
            </p>
            
            <h2>Actividad Práctica</h2>
            <p>Escribe un programa que:
              <ul>
                <li>Cree una variable <b>edad</b> con el valor de tu edad.</li>
                <li>Cree una variable <b>peso</b> con tu peso en kilogramos.</li>
                <li>Imprima ambas variables.</li>
              </ul>
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default VarNumericas;
