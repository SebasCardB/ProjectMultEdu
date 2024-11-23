import React, { useState } from "react";


function OpDivi() {
  const [activeTab, setActiveTab] = useState("text"); // Estado para controlar la pestaña activa

  return (
    <div className="variables-page">
      <div className="titulo">
        <h1>Operaciones: División</h1>
      </div>

      <div className="description-section" >
      <p style={{ textAlign: 'justify' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi neque est, porta eleifend pulvinar ut, venenatis vitae urna. Curabitur elementum finibus erat et pulvinar. Ut vestibulum, elit eget efficitur vestibulum, neque erat vulputate felis, eu commodo turpis eros vitae nibh. Aenean ullamcorper est nec mattis gravida. Ut et rhoncus lacus. Nunc suscipit sed ligula sit amet lacinia. Etiam tempus turpis cursus mollis facilisis. Vivamus vitae facilisis ipsum, ut consectetur mi. Sed iaculis consectetur neque, eget sagittis metus porttitor sit amet. In hac habitasse platea dictumst. Suspendisse nec rutrum est. Nam ac eros vel tortor rhoncus volutpat nec nec sapien.

        Curabitur in erat mauris. Mauris sit amet interdum augue. Mauris viverra auctor tortor, malesuada gravida velit egestas a. Nulla ac lacus nulla. Sed tempus commodo venenatis. In bibendum justo a ultricies sagittis. Duis ultricies, tellus a porta dictum, nunc tellus pharetra diam, ac lobortis felis quam in est. Etiam venenatis purus aliquet leo aliquam laoreet. Nunc accumsan feugiat augue nec congue. Etiam at diam eget neque pulvinar tempor. Donec mi sem, hendrerit non pellentesque eu, facilisis ut quam. Vestibulum ligula dolor, commodo tincidunt elit quis, consequat tempor diam. Donec posuere urna vitae fermentum luctus. Curabitur luctus dui a ornare gravida.
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
            <h2>¿Qué es Lorem Ipsum?</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo.
              Curabitur eu tristique felis, eget hendrerit augue. Nulla ut condimentum eros.
              Interdum et malesuada fames ac ante ipsum primis in faucibus...
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
            <h2>Ejemplos de Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum a gravida justo.
              Curabitur eu tristique felis, eget hendrerit augue. Nulla ut condimentum eros.
              Interdum et malesuada fames ac ante ipsum primis in faucibus...
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

export default OpDivi;