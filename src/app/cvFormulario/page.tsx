'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

// Estructura de datos que usará el formulario
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

export default function App() {
  // Almacena los textos que el usuario escribe en tiempo real
  const [info, setInfo] = useState<CVData>({
    name: '', address: '', email: '', summary: '',
    experience: '', education: '', languages: '', skills: ''
  });

  // Controla si el bloque del CV final se muestra o se oculta
  const [showCV, setShowCV] = useState<boolean>(false);

  // Detecta el cambio en cualquier input o textarea y actualiza su valor
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  // Se ejecuta al presionar el botón de enviar
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue por completo
    setShowCV(true);    // Hace visible la sección del CV en pantalla
  };

  return (
    <div className="container">
      {/* Formulario de captura de datos */}
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Create your CV</h2>

        {/* Los nombres de los atributos 'name' deben coincidir con la interfaz CVData */}
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={info.name} onChange={handleInputChange} required />
        </div>

        <div className="input-group">
          <label>Address:</label>
          <input type="text" name="address" value={info.address} onChange={handleInputChange} required />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={info.email} onChange={handleInputChange} required />
        </div>

        <div className="input-group">
          <label>Summary:</label>
          <textarea name="summary" value={info.summary} onChange={handleInputChange} rows={3} required />
        </div>

        <div className="input-group">
          <label>Experience:</label>
          <textarea name="experience" value={info.experience} onChange={handleInputChange} rows={3} required />
        </div>

        <div className="input-group">
          <label>Education:</label>
          <textarea name="education" value={info.education} onChange={handleInputChange} rows={3} required />
        </div>

        <div className="input-group">
          <label>Languages:</label>
          <input type="text" name="languages" value={info.languages} onChange={handleInputChange} required />
        </div>

        <div className="input-group">
          <label>Skills:</label>
          <input type="text" name="skills" value={info.skills} onChange={handleInputChange} required />
        </div>

        <button type="submit" className="submit-btn">Generate CV</button>
      </form>

      {/* Condicional: si showCV es verdadero, muestra el documento final */}
      {showCV && (
        <div className="cv-section">
          <h2>Curriculum Vitae</h2>
          <div className="cv-content">
            <h3>{info.name}</h3>
            <p><strong>Email:</strong> {info.email} | <strong>Address:</strong> {info.address}</p>

            <hr />

            <h4>Summary</h4>
            <p>{info.summary}</p>

            <h4>Experience</h4>
            <p>{info.experience}</p>

            <h4>Education</h4>
            <p>{info.education}</p>

            <h4>Languages</h4>
            <p>{info.languages}</p>

            <h4>Skills</h4>
            <p>{info.skills}</p>
          </div>
        </div>
      )}
    </div>
  );
}