import React, { useState } from "react";
import CodeExample from './CodeExample';


function VarBool() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Variable: Booleanas</h1>
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
            <h2>¿Qué son las variables booleanas?</h2>
            <p>
            Las variables booleanas son un tipo de dato que solo puede tener dos valores posibles:
            <ul>
              <li><b>True:</b> Verdadero</li>
              <li><b>False:</b> Falso</li>
            </ul>
            Estas variables son fundamentales en programación, ya que se utilizan para representar estados lógicos o decisiones en el programa.
            En el mundo real, un ejemplo de booleano sería:
            <ul>
              <li>¿Está la luz encendida? <b>Sí (True)</b> o <b>No (False)</b></li>
              <li>¿Tienes más de 18 años? <b>Sí (True)</b> o <b>No (False)</b></li>
            </ul>
            En Python, los valores <b>True</b> y <b>False</b> son palabras reservadas y siempre deben escribirse con la primera letra en mayúscula.
            </p>

            <h2>¿Qué hacen las variables booleanas?</h2>
            <p>Las variables booleanas son especialmente útiles para decidir qué partes de un programa deben ejecutarse. Por ejemplo:
              <ul>
                <li>Activar o desactivar funciones.</li>
                <li>Controlar bucles y decisiones (aunque aquí no profundizaremos porque pertenece a módulos posteriores).</li>
              </ul>
              <b>Ejemplo básico:</b>
              <CodeExample codeString={`
# Variable booleana
es_estudiante = True

# Imprimir valor
print("¿Eres estudiante?:", es_estudiante)  # Muestra: ¿Eres estudiante?: True
              `} language="python" />
            </p>

            <h2>¿Cómo se usan las variables booleanas en Python?</h2>
                <h3>a) Creación de una variable booleana</h3>
                <p>Puedes crear una variable booleana asignando directamente los valores de <b>True</b> o <b>False</b>
                <CodeExample codeString={`
# Ejemplo de variables booleanas
luz_encendida = True
puerta_abierta = False
              `} language="python" />
                </p>
                
                <h3>b) Uso en comparaciones</h3>
                <p>Aunque no se profundizará aquí en <b>operadores lógicos</b>, las variables booleanas suelen ser el resultado de una comparación. <b>Por ejemplo:</b>
                <CodeExample codeString={`
# Comparación simple
es_mayor = 18 > 16
print(es_mayor)  # Muestra: True
              `} language="python" />
                </p>
                
                <p>Este tipo de comparaciones se abordará más adelante, en el módulo de Condicionales.</p>
                <h3>c) Reasignación de valores</h3>
                <p>Al igual que otros tipos de variables, los booleanos pueden cambiar de valor en cualquier momento:
                <CodeExample codeString={`
encendido = True
print("Estado inicial:", encendido)  # Muestra: True

# Cambiar el estado
encendido = False
print("Estado final:", encendido)  # Muestra: False
              `} language="python" />
                </p>
                
              <h3>d) Impresión de valores Booleanos</h3>
              <p>Las variables booleanas se imprimen de la misma forma que otros tipos de datos. <b>Ejemplo:</b>
              <CodeExample codeString={`
# Imprimir directamente un booleano
print(True)  # Muestra: True
              `} language="python" />
              </p>
              
            <h2>Buenas prácticas al usar booleanos</h2>
            <p>
              <ol>
                <li><b>Usar nombres descriptivos:</b>Evita nombres genéricos como a o b. En su lugar, usa nombres que reflejen el propósito de la variable, 
                como es_activo o tiene_permiso.</li>
                <li><b>Evitar redundancias:</b>No compares directamente con True o False en condiciones. Ejemplo:
                  <ul>
                    <li><b>Evita:</b> if es_mayor == True:</li>
                    <li><b>Mejor:</b> if es_mayor:</li>
                  </ul>
                </li>
                <li><b>Ser consistente con la capitalización:</b> Los booleanos en Python son sensibles a mayúsculas. Asegúrate de escribir <b>True</b> y <b>False </b> 
                correctamente (con T y F en mayúscula).</li>
              </ol>
            </p>
            <h2>Introducción a los operadores Lógicos</h2>
            <p>Los operadores lógicos permiten combinar o modificar valores booleanos. Aunque no profundizaremos en su uso avanzado, aquí tienes una breve introducción:</p>
            <h3>a) Operador "and"</h3>
            <p>Devuelve <b>True</b> solo si ambas condiciones son verdaderas. <b>Ejemplo: </b>
            <CodeExample codeString={`
es_mayor = True
tiene_permiso = False
print(es_mayor and tiene_permiso)  # Muestra: False
              `} language="python" />
            </p>
            
              <h3>b) Operador "or"</h3>
              <p>Devuelve <b>True</b> solo si una de las condiciones es verdadera
              <CodeExample codeString={`
es_mayor = True
tiene_permiso = False
print(es_mayor or tiene_permiso)  # Muestra: True
              `} language="python" />
              </p>
              
              <h3>c) Operador not</h3>
              <p>Invierte el valor de booleano: 
              <CodeExample codeString={`
encendido = True
print(not encendido)  # Muestra: False
              `} language="python" />
              </p>
              
              <p>Estos operadores serán fundamentales en los módulos de condicionales y ciclos.</p>
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
          <h3>Variables Booleanas</h3>
          <div class="Videos">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/ZrxcqbFYjiw?si=DMXlSZCsNnxkZ5Zn" title="Operaciones Matemáticas en Python" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          </section>
        )}
        {activeTab === "examples" && (
          <section className="examples-section">
            <h2>Ejemplos prácticos</h2>
            <p>
            Supongamos que estás desarrollando una aplicación para verificar si un usuario ha iniciado sesión. Puedes usar una variable booleana para 
            representar este estado:
            <CodeExample codeString={`
# Estado de inicio de sesión
usuario_logueado = False
print("¿El usuario está logueado?:", usuario_logueado)  # Muestra: ¿El usuario está logueado? False

# Cambiar el estado cuando el usuario inicia sesión
usuario_logueado = True
print("¿El usuario está logueado?:", usuario_logueado)  # Muestra: ¿El usuario está logueado? True
              `} language="python" />
            </p>
            
              <p>Otro ejemplo sería representar el estado de una luz:
              <CodeExample codeString={`
# Estado de la luz
luz_encendida = True

if luz_encendida:
    print("La luz está encendida.")
else:
    print("La luz está apagada.")
              `} language="python" />
              </p>
              
              <h3>Ejemplo usando operadores lógicos</h3>
              <p>Crea un programa que evalue si una persona puede acceder a una biblioteca:
                <ul><li>Solo se le permitirá la entrada a la persona si es un estudiante y tiene su carnet de biblioteca.</li></ul>
                <CodeExample codeString={`
es_estudiante = True
tiene_carnet = False

# Verificar acceso
puede_ingresar = es_estudiante and tiene_carnet
print("¿Puede ingresar a la biblioteca?", puede_ingresar)  # Muestra: False
              `} language="python" />
              </p>
              <h2>Actividad práctica</h2>
              <p>
                Crea un programa que:
                <ol>
                  <li>Declare una variable <b>tiene_acceso</b> con el valor <b>False</b></li>
                  <li>Cambie su valor a <b>True</b> e imprima un mensaje indicando que el acceso ha sido concedido.</li>
                  <li>Si el valor es <b>False</b>, imprime "Acceso denegado".</li>
                </ol>
                <b>Nota: </b> Para realizar el punto 2 y 3 de esta actividad es necesario el uso de un condicional simple. Como abrebocas de dicha sección te facilitamos el
                código de dicha estructura:
                <CodeExample codeString={`
# Comprobar el estado y mostrar mensaje
if tiene_acceso:
    print("Acceso concedido.")
else:
    print("Acceso denegado.")
              `} language="python" />
                
              </p>
          </section>
        )}
      </main>
    </div>
  );
}

export default VarBool;