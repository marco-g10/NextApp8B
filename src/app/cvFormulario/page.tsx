'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Interfaz para definir el tipo de datos de nuestro formulario

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
  // Estado para guardar los datos ingresados en el formulario
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

  // Estado para saber si mostramos el formulario o el CV generado
  
  const [showCV, setShowCV] = useState<boolean>(false);

  // Funcion para guardar lo que escribe el usuario
  
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Funcion para enviar el formulario
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowCV(true); // Mostramos el CV generado
  };

  // Funcion para regresar al formulario
  
  const handleBack = () => {
    setShowCV(false); // Regresamos al formulario
  };

  return (

    //  Aqui empieza el estilo que saque de una pagina
    
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>

      {showCV === false && (
        <div>
          <h1 style={{ textAlign: 'center' }}>Formulario de CV</h1>
          <form onSubmit={handleSubmit}>
            
            <p>
              <label><b>Nombre Completo:</b></label><br />
              <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Dirección:</b></label><br />
              <input type="text" name="address" value={formData.address} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Correo Electrónico:</b></label><br />
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Resumen Profesional:</b></label><br />
              <textarea name="summary" value={formData.summary} onChange={handleChange} rows={3} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Experiencia Laboral:</b></label><br />
              <textarea name="experience" value={formData.experience} onChange={handleChange} rows={3} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Educación:</b></label><br />
              <textarea name="education" value={formData.education} onChange={handleChange} rows={3} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Idiomas:</b></label><br />
              <input type="text" name="languages" value={formData.languages} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <p>
              <label><b>Habilidades:</b></label><br />
              <input type="text" name="skills" value={formData.skills} onChange={handleChange} style={{ width: '100%', padding: '8px' }} required />
            </p>

            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: 'white', border: 'none', cursor: 'pointer' }}>
              Ver CV Generado
            </button>

          </form>
        </div>
      )}

      {/* 2. VISTA DEL CV GENERADO */}
      {showCV === true && (
        <div>
          <button onClick={handleBack} style={{ padding: '8px 12px', marginBottom: '20px', cursor: 'pointer' }}>
            ← Regresar al Formulario
          </button>
          
          <h1>{formData.name}</h1>
          <p><b>Email:</b> {formData.email} | <b>Dirección:</b> {formData.address}</p>
          <hr />
          
          <h3>Resumen Profesional</h3>
          <p>{formData.summary}</p>
          <hr />
          
          <h3>Experiencia</h3>
          <p>{formData.experience}</p>
          <hr />
          
          <h3>Educación</h3>
          <p>{formData.education}</p>
          <hr />
          
          <h3>Idiomas</h3>
          <p>{formData.languages}</p>
          <hr />
          
          <h3>Habilidades</h3>
          <p>{formData.skills}</p>
        </div>
      )}

    </div>
  );
}
