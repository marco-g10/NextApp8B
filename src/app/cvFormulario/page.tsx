"use client";

// Importamos useState para guardar la información del formulario
import { useState } from "react";

export default function Home() {

  // Aquí se guarda todo lo que escribe el usuario en el formulario
  const [formData, setFormData] = useState({
    nombre: "",
    direccion: "",
    email: "",
    summary: "",
    experiencia: "",
    educacion: "",
    idiomas: "",
    skills: "",
  });

  // Aquí se guardan los datos que se mostrarán en el CV generado
  const [cvData, setCvData] = useState<typeof formData | null>(null);

  // Esta función actualiza los datos cada vez que el usuario escribe
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Al presionar el botón se copian los datos para mostrar el CV
  const handleGenerate = () => {
    setCvData({ ...formData });
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>CV</h1>

      {/* Sección donde el usuario captura su información */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Información</h2>

        <div style={{ marginBottom: "10px" }}>
          <label>Nombre</label><br />
          <input
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Dirección</label><br />
          <input
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email</label><br />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Summary</label><br />
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Experiencia</label><br />
          <textarea
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Educación</label><br />
          <textarea
            name="educacion"
            value={formData.educacion}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Idiomas</label><br />
          <input
            name="idiomas"
            value={formData.idiomas}
            onChange={handleChange}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Skills</label><br />
          <input
            name="skills"
            value={formData.skills}
            onChange={handleChange}
          />
        </div>

        {/* Botón para generar el CV con los datos capturados */}
        <button onClick={handleGenerate}>Generar CV</button>
      </div>

      {/* Esta sección solo aparece cuando ya se generó el CV */}
      {cvData && (
        <div style={{ borderTop: "2px solid #333", paddingTop: "20px" }}>
          <h1>{cvData.nombre}</h1>
          <p>{cvData.email} | {cvData.direccion}</p>

          <h2>Summary</h2>
          <p>{cvData.summary}</p>

          <h2>Experiencia</h2>
          <p>{cvData.experiencia}</p>

          <h2>Educación</h2>
          <p>{cvData.educacion}</p>

          <h2>Idiomas</h2>
          <p>{cvData.idiomas}</p>

          <h2>Skills</h2>
          <p>{cvData.skills}</p>
        </div>
      )}
    </main>
  );
}