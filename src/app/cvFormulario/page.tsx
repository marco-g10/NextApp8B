'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';


// 1. DEFINICIÓN DE INTERFACES 

// Aquí defino la interfaz o "molde" que le dice a TypeScript exactamente 
// qué datos voy a manejar en mi formulario y de qué tipo son.
// Como todos los campos del CV son texto, los defino todos como 'string'.
// Esto es súper útil porque si me equivoco y trato de meter un dato incorrecto,
// TypeScript me va a avisar antes de correr el programa, evitando bugs.
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
  

  // 2. DEFINICIÓN DE ESTADOS
 
  
  // Aquí declaro el estado principal llamado 'formData'. 
  // Le indico a TypeScript que este estado va a usar la interfaz <CVData>.
  // Empieza con todos los valores en blanco porque el usuario aún no escribe nada.
  // Decidí usar un solo objeto en lugar de muchos estados separados para que 
  // el código sea mucho más limpio y fácil de mantener.
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

  // Este segundo estado, 'cvData', lo utilizo para guardar la información final
  // una vez que el usuario presiona el botón. Empieza como 'null' porque 
  // al cargar la página no hay ningún CV. 
  // Notar que le digo a TypeScript que puede ser <CVData | null> (los datos o nada).
  const [cvData, setCvData] = useState<CVData | null>(null);


  
  // 3. FUNCIONES DE MANEJO DE EVENTOS (HANDLERS TIPADOS)

  // La función 'handleChange' se dispara cada vez que el usuario teclea algo.
  // En TypeScript, tengo que especificar qué tipo de evento es 'e'. 
  // Uso ChangeEvent y le digo que puede venir de un Input o de un Textarea.
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Para no escribir 'e.target.name' y 'e.target.value' a cada rato,
    // extraigo (desestructuro) el 'name' y el 'value' del input actual.
    const { name, value } = e.target;
    
    // Actualizo el estado del formulario.
    // Uso el spread operator '...formData' para hacer una copia de todo lo que 
    // ya estaba escrito, y solo actualizo la propiedad [name] con el nuevo valor.
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // La función 'handleSubmit' se ejecuta cuando se presiona el botón del formulario.
  // Aquí el evento es de tipo FormEvent, vinculado a un elemento de formulario HTML.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Esto es súper importante: previene que la página se recargue por defecto 
    // al mandar el formulario, lo cual borraría todos nuestros datos en pantalla.
    e.preventDefault();
    
    // Aquí simplemente agarro todo lo que está en 'formData' (lo que el usuario 
    // escribió) y se lo paso a 'cvData'. Esto es lo que va a "activar"
    // la visualización del CV en la parte de abajo.
    setCvData(formData);
  };



  // 4. RENDERIZADO DE LA INTERFAZ 


  return (
    <div className="container">
      {/* SECCIÓN DEL FORMULARIO */}
      {/* Envuelvo todo en un form para usar el evento onSubmit nativo */}
      <form className="form-section" onSubmit={handleSubmit}>
        <h2>Create your CV</h2>
        
        {/* Cada input tiene su propio div para poder ordenarlos fácilmente con CSS.
            El atributo 'name' debe coincidir exactamente con las propiedades de 
            la interfaz CVData para que la función 'handleChange' funcione bien. */}
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Address:</label>
          <input type="text" name="address" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Summary:</label>
          <textarea name="summary" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Experience:</label>
          <textarea name="experience" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Education:</label>
          <textarea name="education" onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Languages:</label>
          <input type="text" name="languages" onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Skills:</label>
          <input type="text" name="skills" onChange={handleChange} required />
        </div>

        {/* Botón que dispara el submit del formulario */}
        <button type="submit" className="submit-btn">Generate CV</button>
      </form>

      {/* SECCIÓN DEL CV GENERADO */}
      {/* Esta es una condición de React (renderizado condicional). 
          Si 'cvData' tiene información (es decir, ya le dimos clic al botón), 
          entonces dibuja todo el bloque del CV. Si es null, no dibuja nada. */}
      {cvData && (
        <div className="cv-section">
          <h2>Curriculum Vitae</h2>
          <div className="cv-content">
            {/* Aquí simplemente inyecto las variables guardadas en cvData */}
            <h3>{cvData.name}</h3>
            <p><strong>Email:</strong> {cvData.email} | <strong>Address:</strong> {cvData.address}</p>
            
            <hr />
            
            <h4>Summary</h4>
            <p>{cvData.summary}</p>
            
            <h4>Experience</h4>
            <p>{cvData.experience}</p>
            
            <h4>Education</h4>
            <p>{cvData.education}</p>
            
            <h4>Languages</h4>
            <p>{cvData.languages}</p>
            
            <h4>Skills</h4>
            <p>{cvData.skills}</p>
          </div>
        </div>
      )}
    </div>
  );
}