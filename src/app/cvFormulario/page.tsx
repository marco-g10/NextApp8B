'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';

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
  const [formData, setFormData] = useState<CVData>({
    name: '',
    address: '',
    email: '',
    summary: '',
    experience: '',
    education: '',
    languages: '',
    skills: ''
  });

  const [cvData, setCvData] = useState<CVData | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCvData(formData);
  };

  return (
    <div>
      {/* FORMULARIO */}
      <form onSubmit={handleSubmit}>
        <h2>Crea tu CV</h2>

        <label>Nombre:</label><br />
        <input type="text" name="name" onChange={handleChange} required /><br /><br />

        <label>Dirección:</label><br />
        <input type="text" name="address" onChange={handleChange} required /><br /><br />

        <label>Email:</label><br />
        <input type="email" name="email" onChange={handleChange} required /><br /><br />

        <label>Resumen:</label><br />
        <textarea name="summary" onChange={handleChange} rows={3} required></textarea><br /><br />

        <label>Experiencia:</label><br />
        <textarea name="experience" onChange={handleChange} rows={3} required></textarea><br /><br />

        <label>Educación:</label><br />
        <textarea name="education" onChange={handleChange} rows={3} required></textarea><br /><br />

        <label>Idiomas:</label><br />
        <input type="text" name="languages" onChange={handleChange} required /><br /><br />

        <label>Habilidades:</label><br />
        <input type="text" name="skills" onChange={handleChange} required /><br /><br />

        <button type="submit">Generar CV</button>
      </form>

      {/* CV GENERADO */}
      {cvData && (
        <div>
          <hr />
          <h2>Curriculum Vitae</h2>

          <h3>{cvData.name}</h3>
          <p>{cvData.email} | {cvData.address}</p>

          <h4>Resumen</h4>
          <p>{cvData.summary}</p>

          <h4>Experiencia</h4>
          <p>{cvData.experience}</p>

          <h4>Educación</h4>
          <p>{cvData.education}</p>

          <h4>Idiomas</h4>
          <p>{cvData.languages}</p>

          <h4>Habilidades</h4>
          <p>{cvData.skills}</p>
        </div>
      )}
    </div>
  );
}
