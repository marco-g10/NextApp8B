"use client";

import { useState, ChangeEvent, FormEvent } from "react";

// aquí defino cómo va a ser la estructura de los datos del CV
// todo es string porque es información de texto
type CVData = {
  nombre: string;
  direccion: string;
  email: string;
  summary: string;
  experiencia: string;
  educacion: string;
  idiomas: string;
  skills: string;
};

// este es el formulario vacío que uso para reiniciar todo cuando haga falta
const emptyForm: CVData = {
  nombre: "",
  direccion: "",
  email: "",
  summary: "",
  experiencia: "",
  educacion: "",
  idiomas: "",
  skills: "",
};

// esta función saca las iniciales del nombre
// ejemplo: "Juan Pérez" -> "JP"
function getInitials(nombre: string): string {
  const palabras = nombre.trim().split(" ").filter(Boolean);

  // si no hay nada escrito, regreso un ?
  if (palabras.length === 0) return "?";

  const primera = palabras[0][0];
  const segunda = palabras.length > 1 ? palabras[1][0] : "";

  return (primera + segunda).toUpperCase();
}

// esta función separa un texto por comas para convertirlo en lista
// ejemplo: "Python, Excel" -> ["Python", "Excel"]
function splitByComma(texto: string): string[] {
  return texto
    .split(",")
    .map((item) => item.trim()) // quito espacios extras
    .filter((item) => item.length > 0); // elimino valores vacíos
}

// componente principal del formulario y el CV
export default function CVForm() {
  // aquí guardo lo que el usuario escribe mientras llena el formulario
  const [formData, setFormData] = useState<CVData>(emptyForm);

  // aquí guardo los datos cuando ya le doy a "Generar CV"
  const [cvData, setCvData] = useState<CVData | null>(null);

  // esta función se ejecuta cada vez que el usuario escribe algo
  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;

    // actualizo solo el campo que cambió sin borrar lo demás
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // cuando el usuario presiona "Generar CV"
  // guardo los datos del formulario para mostrarlos abajo
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCvData(formData);
  }

  // limpia el formulario y también el CV generado
  function handleReset() {
    setFormData(emptyForm);
    setCvData(null);
  }

  return (
    <div className="page">
      <h1>Generador de CV</h1>

      <p className="subtitle">
        Llena el formulario y genera tu CV automáticamente
      </p>

      {/* formulario donde el usuario escribe sus datos */}
      <form onSubmit={handleSubmit} className="form">
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="direccion">Dirección</label>
          <input
            id="direccion"
            name="direccion"
            type="text"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="summary">Summary</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="experiencia">Experiencia</label>
          <textarea
            id="experiencia"
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="educacion">Educación</label>
          <textarea
            id="educacion"
            name="educacion"
            value={formData.educacion}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="idiomas">Idiomas</label>
          <input
            id="idiomas"
            name="idiomas"
            type="text"
            value={formData.idiomas}
            onChange={handleChange}
          />
        </div>

        <div className="field">
          <label htmlFor="skills">Skills</label>
          <input
            id="skills"
            name="skills"
            type="text"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        {/* botones para enviar o limpiar */}
        <div className="buttons">
          <button type="submit">Generar CV</button>
          <button type="button" className="secondary" onClick={handleReset}>
            Limpiar
          </button>
        </div>
      </form>

      {/* aquí solo se muestra el CV cuando ya hay datos */}
      {cvData && (
        <div className="cv">
          {/* encabezado del CV con iniciales */}
          <div className="cv-header">
            <div className="cv-avatar">{getInitials(cvData.nombre)}</div>
            <div>
              <h2>{cvData.nombre || "Nombre del candidato"}</h2>
            </div>
          </div>

          <div className="cv-body">
            {/* lado izquierdo del CV */}
            <aside className="cv-sidebar">
              <div className="cv-section">
                <h3>Contacto</h3>
                <p>{cvData.direccion || "Sin dirección"}</p>
                <p className="break">{cvData.email || "Sin email"}</p>
              </div>

              <div className="cv-section">
                <h3>Idiomas</h3>
                <ul className="plain-list">
                  {splitByComma(cvData.idiomas).length > 0 ? (
                    splitByComma(cvData.idiomas).map((idioma, index) => (
                      <li key={index}>{idioma}</li>
                    ))
                  ) : (
                    <li>Sin información</li>
                  )}
                </ul>
              </div>

              <div className="cv-section">
                <h3>Skills</h3>
                <div className="badges">
                  {splitByComma(cvData.skills).length > 0 ? (
                    splitByComma(cvData.skills).map((skill, index) => (
                      <span className="badge" key={index}>
                        {skill}
                      </span>
                    ))
                  ) : (
                    <span className="badge">Sin información</span>
                  )}
                </div>
              </div>
            </aside>

            {/* lado derecho del CV */}
            <main className="cv-main">
              <div className="cv-section">
                <h3>Acerca de mí</h3>
                <p>{cvData.summary || "Sin información"}</p>
              </div>

              <div className="cv-section">
                <h3>Experiencia</h3>
                <p>{cvData.experiencia || "Sin información"}</p>
              </div>

              <div className="cv-section">
                <h3>Educación</h3>
                <p>{cvData.educacion || "Sin información"}</p>
              </div>
            </main>
          </div>
        </div>
      )}

      {/* estilos del formulario y CV */}
      <style>{`
        .page {
          max-width: 700px;
          margin: 0 auto;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #222;
        }
        h1 {
          font-size: 24px;
          margin-bottom: 4px;
        }
        .subtitle {
          font-size: 14px;
          color: #555;
          margin-bottom: 20px;
        }
        .form {
          display: flex;
          flex-direction: column;
          gap: 12px;
          background: #f7f7f7;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #ddd;
        }
        .field {
          display: flex;
          flex-direction: column;
        }
        label {
          font-size: 13px;
          font-weight: bold;
          margin-bottom: 4px;
        }
        input, textarea {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 14px;
          font-family: inherit;
        }
        .buttons {
          display: flex;
          gap: 10px;
          margin-top: 8px;
        }
        button {
          padding: 10px 16px;
          border: none;
          border-radius: 4px;
          background: #2e6fbf;
          color: white;
          font-size: 14px;
          cursor: pointer;
        }
        button.secondary {
          background: #999;
        }
        button:hover {
          opacity: 0.9;
        }
        .cv {
          margin-top: 28px;
          border-radius: 10px;
          overflow: hidden;
          background: white;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }
        .cv-header {
          background: linear-gradient(135deg, #2e6fbf, #1b4d8f);
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .cv-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: white;
          color: #1b4d8f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          font-weight: bold;
          flex-shrink: 0;
        }
        .cv-header h2 {
          margin: 0;
          color: white;
          font-size: 24px;
          letter-spacing: 0.3px;
        }
        .cv-body {
          display: grid;
          grid-template-columns: 1fr 2fr;
        }
        .cv-sidebar {
          background: #eef3fa;
          padding: 22px 20px;
        }
        .cv-main {
          padding: 22px 24px;
        }
        .cv-section {
          margin-bottom: 18px;
        }
        .cv-section:last-child {
          margin-bottom: 0;
        }
        .cv-section h3 {
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: #1b4d8f;
          border-bottom: 2px solid #2e6fbf;
          display: inline-block;
          padding-bottom: 4px;
          margin: 0 0 8px 0;
        }
        .cv-section p {
          font-size: 14px;
          line-height: 1.5;
          white-space: pre-line;
          margin: 0;
          color: #333;
        }
        .cv-section p.break {
          word-break: break-all;
        }
        .plain-list {
          margin: 0;
          padding: 0;
          list-style: none;
          font-size: 14px;
          color: #333;
        }
        .plain-list li {
          padding: 3px 0;
        }
        .badges {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
        }
        .badge {
          background: #2e6fbf;
          color: white;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 999px;
        }
        .timeline-item {
          border-left: 3px solid #2e6fbf;
          padding-left: 14px;
        }
        @media (max-width: 560px) {
          .cv-body {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}