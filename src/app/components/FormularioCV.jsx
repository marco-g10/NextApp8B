"use client"; // Indica que este componente se ejecuta en el cliente

import React, { useState } from "react"; // Importa React y el hook useState

export default function FormularioCV() { // Componente principal

  // Estado que almacena los datos capturados en el formulario
  const [formData, setFormData] = useState({
    nombre: "", // Nombre del usuario
    direccion: "", // Dirección del usuario
    correo: "", // Correo electrónico
    telefono: "", // Número telefónico
    resumen: "", // Resumen profesional
    experiencia: "", // Experiencia laboral
    educacion: "", // Formación académica
    idiomas: "", // Idiomas que domina
    habilidades: "", // Habilidades técnicas y personales
  });

  // Función que se ejecuta cuando cambia un campo
  const handleChange = (e) => {
    const { name, value } = e.target; // Obtiene el nombre y valor del campo

    setFormData((prev) => ({ // Actualiza el estado manteniendo los demás datos
      ...prev,
      [name]: value, // Modifica únicamente el campo editado
    }));
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Muestra los datos capturados en formato JSON
    alert("Datos enviados:\n" + JSON.stringify(formData, null, 2));
  };

  return (
    // Contenedor principal centrado en la página
    <div style={{ maxWidth: "700px", margin: "24px auto", padding: "0 12px" }}>
      
      <h2>Formulario de CV</h2> {/* Título del formulario */}

      {/* Formulario principal */}
      <form onSubmit={handleSubmit}>

        <label>Nombre:</label> {/* Etiqueta del campo nombre */}
        <input
          type="text" // Permite ingresar texto
          name="nombre"
          value={formData.nombre} // Valor almacenado en el estado
          onChange={handleChange} // Actualiza el estado al escribir
          required // Campo obligatorio
        />

        <label>Dirección:</label>
        <input
          type="text" // Permite ingresar texto para la dirección
          name="direccion"
          value={formData.direccion}
          onChange={handleChange} // Actualiza el estado al escribir
        />

        <label>Correo:</label> 
        <input
          type="email" // Valida formato de correo
          name="correo"
          value={formData.correo}
          onChange={handleChange} // Actualiza el estado al escribir
          required
        />

        <label>Teléfono:</label>
        <input
          type="tel" // Campo para números telefónicos
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
        />

        <label>Resumen (breve):</label>
        <textarea
          name="resumen"
          value={formData.resumen}
          onChange={handleChange}// Permite ingresar un texto más largo para el resumen profesional
        />

        <label>Experiencia:</label>
        <textarea
          name="experiencia"
          value={formData.experiencia}
          onChange={handleChange}
        />

        <label>Educación:</label>
        <textarea
          name="educacion"
          value={formData.educacion}
          onChange={handleChange}
        />

        <label>Idiomas:</label>
        <input
          type="text"
          name="idiomas"
          value={formData.idiomas} 
          onChange={handleChange}
          placeholder="Ej: Español (nativo), Inglés (intermedio)" // Texto de ayuda
        />

        <label>Habilidades / Skills:</label>
        <textarea
          name="habilidades"
          value={formData.habilidades} // Permite ingresar varias habilidades
          onChange={handleChange}
          placeholder="Separar por comas: JavaScript, React, CSS"
        />

        {/* Botón que envía el formulario */}
        <button type="submit">Enviar</button>

      </form>
    </div>
  );
}