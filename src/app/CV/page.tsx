'use client'; // Indica que este componente se ejecutará en el navegador

import "./cv.css"; // Importa los estilos del currículum

// Hook utilizado para guardar y actualizar información del formulario
import { useState } from "react";

export default function CVPage() {

  // Objeto que almacena los datos que escribe el usuario
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    summary: "",
    experience: "",
    education: "",
    languages: "",
    skills: "",
  });

  // Variable que almacena los datos finales del CV generado
  const [cvData, setCvData] = useState<typeof formData | null>(null);

  // Función que se ejecuta cada vez que el usuario escribe en un input o textarea
  const handleChange = (

    // Evento que captura los cambios realizados por el usuario
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {

    // Obtiene el nombre del campo y el valor ingresado
    const { name, value } = event.target;

    // Actualiza únicamente el campo modificado
    setFormData({
      // Conserva los valores existentes
      ...formData,

      // Actualiza la propiedad correspondiente
      [name]: value,
    });
  };

  // Función que copia los datos del formulario al CV final
  const generateCV = () => {
    setCvData(formData);
  };

  return (

    // Contenedor principal de la página
    <div
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "20px",
      }}
    >

      {/* Título principal de la aplicación */}
      <h1>Curriculum Vitae Generator</h1>

      {/* Campo para capturar el nombre completo */}
      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br /><br />

      {/* Campo para capturar la dirección */}
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
      />

      <br /><br />

      {/* Campo para capturar el correo electrónico */}
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />

      <br /><br />

      {/* Área de texto para el resumen profesional */}
      <textarea
        name="summary"
        placeholder="Professional Summary"
        value={formData.summary}
        onChange={handleChange}
      />

      <br /><br />

      {/* Área de texto para la experiencia laboral */}
      <textarea
        name="experience"
        placeholder="Work Experience"
        value={formData.experience}
        onChange={handleChange}
      />

      <br /><br />

      {/* Área de texto para la formación académica */}
      <textarea
        name="education"
        placeholder="Education"
        value={formData.education}
        onChange={handleChange}
      />

      <br /><br />

      {/* Área de texto para los idiomas */}
      <textarea
        name="languages"
        placeholder="Languages"
        value={formData.languages}
        onChange={handleChange}
      />

      <br /><br />

      {/* Área de texto para las habilidades */}
      <textarea
        name="skills"
        placeholder="Skills"
        value={formData.skills}
        onChange={handleChange}
      />

      <br /><br />

      {/* Botón que genera la vista previa del currículum */}
      <button onClick={generateCV}>
        Generate CV
      </button>

      {/* 
        Si cvData contiene información, se muestra la
        vista previa del currículum generado.
      */}
      {cvData && (

        // Contenedor principal del CV
        <div className="cv-preview">

          {/* Encabezado con información personal */}
          <div className="cv-header">

            {/* Nombre completo */}
            <h2>{cvData.name}</h2>

            {/* Dirección */}
            <p>{cvData.address}</p>

            {/* Correo electrónico */}
            <p>{cvData.email}</p>

          </div>

          {/* Contenedor de las secciones del currículum */}
          <div className="cv-body">

            {/* Resumen profesional */}
            <section>
              <h3>Professional Summary</h3>
              <p>{cvData.summary}</p>
            </section>

            {/* Experiencia laboral */}
            <section>
              <h3>Work Experience</h3>
              <p>{cvData.experience}</p>
            </section>

            {/* Formación académica */}
            <section>
              <h3>Education</h3>
              <p>{cvData.education}</p>
            </section>

            {/* Idiomas */}
            <section>
              <h3>Languages</h3>
              <p>{cvData.languages}</p>
            </section>

            {/* Habilidades */}
            <section>
              <h3>Skills</h3>
              <p>{cvData.skills}</p>
            </section>

          </div>

        </div>
      )}
    </div>
  );
}