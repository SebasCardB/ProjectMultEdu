import React, { useState } from "react";
import CodeExample from './CodeExample';

function VarTexto() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Variable: Texto</h1>
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
            <h2>¿Qué son las variables de texto?</h2>

            <p>
            Las variables de texto, o strings, almacenan cadenas de caracteres, como palabras, frases o incluso símbolos. 
            Estas cadenas siempre están rodeadas por comillas:
            <ul>
              <li><b>Simples: </b>'Hola'</li>
              <li><b>Dobles: </b>"Mundo"</li>
            </ul>
            <b>Ejemplo básico:</b>
            <CodeExample codeString={`
mensaje = "Hola, mundo"
              `} language="python" />
            </p>
            

            <h2>¿Qué hacen las variables de texto?</h2>
            <p>Las cadenas de texto son fundamentales para mostrar mensajes, procesar nombres de usuarios, escribir descripciones y mucho más. <b>Por ejemplo:</b>
            <CodeExample codeString={`
nombre = "Ana"
print("Hola, " + nombre)  # Muestra: Hola, Ana
              `} language="python" />
            </p>
          
            <h2>Cómo se usan las variables de texto</h2>
            <h1>a) Creación de strings</h1>
            
            <p>
            <CodeExample codeString={`
frase = "Aprender Python es divertido"
              `} language="python" />
              Los strings se crean asignando texto a una variable:</p>
            <h1>b) Concatenación de cadenas</h1>
            <p>Puedes unir strings con el operador +:
            <CodeExample codeString={`
nombre = "Luis"
saludo = "Hola, " + nombre
print(saludo)  # Muestra: Hola, Luis
              `} language="python" />
            </p>
            
            <h1>c) Manejo de comillas dentro de cadenas</h1>
            <p>Usa comillas dobles si tu string contiene comillas simples:
            <CodeExample codeString={`
frase = "Es un 'gran' día"
              `} language="python" />
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
            Supongamos que quieres crear un saludo personalizado:
            <CodeExample codeString={`
nombre = "Carlos"
mensaje = "Hola, " + nombre + ". ¡Bienvenido a Python!"
print(mensaje) #Salida: Hola, Carlos. ¡Bienvenido a Python!
              `} language="python" />
            </p>
            
            <h2>Actividad práctica</h2>
            <p>
              Escribe un programa que:
              <ol>
                <li>Guarde tu nombre en una variable.</li>
                <li>Cree un mensaje como: "Hola, [tu nombre], ¿cómo estás?"</li>
                <li>Imprima el mensaje.</li>
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

export default VarTexto;