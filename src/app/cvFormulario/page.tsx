'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Estructura utilizada para almacenar la información del CV
interface CVData {
  name: string;
  address: string;
  email: string;
  summary: string;
  experience: string;
  education: string;
  languages: string;
  skills: string;
}

// Componente principal
export default function App() {

  // Estado que almacena los datos ingresados
  const [info, setInfo] = useState<CVData>({
    name: '',
    address: '',
    email: '',
    summary: '',
    experience: '',
    education: '',
    languages: '',
    skills: ''
  });

  // Controla si el CV se muestra o no
  const [showCV, setShowCV] = useState(false);

  // Actualiza el valor de los campos del formulario
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value
    });
  };

  // Procesa el envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCV(true);
  };

  return (
    <div className="container">

      {/* Formulario principal */}
      <form className="form-section" onSubmit={handleSubmit}>

        {/* Título del formulario */}
        <h2>Create your CV</h2>

        {/* Campo para el nombre */}
        <div className="input-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={info.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Campo para la dirección */}
        <div className="input-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={info.address}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Campo para el correo */}
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Resumen profesional */}
        <div className="input-group">
          <label>Summary:</label>
          <textarea
            name="summary"
            value={info.summary}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>

        {/* Experiencia laboral */}
        <div className="input-group">
          <label>Experience:</label>
          <textarea
            name="experience"
            value={info.experience}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>

        {/* Formación académica */}
        <div className="input-group">
          <label>Education:</label>
          <textarea
            name="education"
            value={info.education}
            onChange={handleInputChange}
            rows={3}
            required
          />
        </div>

        {/* Idiomas */}
        <div className="input-group">
          <label>Languages:</label>
          <input
            type="text"
            name="languages"
            value={info.languages}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Habilidades */}
        <div className="input-group">
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={info.skills}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Botón para generar el CV */}
        <button type="submit">
          Generate CV
        </button>

      </form>

      {/* Muestra el CV cuando se envía el formulario */}
      {showCV && (
        <div className="cv-section">

          {/* Título del CV */}
          <h2>Curriculum Vitae</h2>

          <div className="cv-content">

            {/* Nombre del candidato */}
            <h3>{info.name}</h3>

            {/* Información de contacto */}
            <p>
              <strong>Email:</strong> {info.email} |
              <strong> Address:</strong> {info.address}
            </p>

            {/* Línea separadora */}
            <hr />

            {/* Resumen */}
            <h4>Summary</h4>
            <p>{info.summary}</p>

            {/* Experiencia */}
            <h4>Experience</h4>
            <p>{info.experience}</p>

            {/* Educación */}
            <h4>Education</h4>
            <p>{info.education}</p>

            {/* Idiomas */}
            <h4>Languages</h4>
            <p>{info.languages}</p>

            {/* Habilidades */}
            <h4>Skills</h4>
            <p>{info.skills}</p>

          </div>
        </div>
      )}

    </div>
  );
}