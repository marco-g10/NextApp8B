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
  // Lo inicializo con mi información real, así el formulario ya aparece 
  // precargado con mis datos en lugar de en blanco.
  // Decidí usar un solo objeto en lugar de muchos estados separados para que 
  // el código sea mucho más limpio y fácil de mantener.
  const [formData, setFormData] = useState<CVData>({
    name: 'Daniel Alejandro Villanueva Ambriz',
    address: 'Aguascalientes, México',
    email: 'daniel.villaambriz2005@gmail.com',
    summary: 'Estudiante de Ingeniería en Sistemas Computacionales con experiencia en automatización de inteligencia artificial, manejo de herramientas digitales y soporte técnico. He participado en proyectos reales de desarrollo de agentes IA, integración con APIs y mantenimiento de equipos. Me adapto rápidamente a nuevos entornos, disfruto aprender y siempre doy lo mejor de mí en lo que hago.',
    experience: 'Becario de Proyectos Externos - Ingeniería en Sistemas Avanzados del Centro SA de CV | Aguascalientes, México (Abril 2026 – Presente)\n\nBecario - Mango Space Marketing | Aguascalientes, México (Enero 2026 – Abril 2026)\n• Desarrollo y entrenamiento de agentes de inteligencia artificial mediante prompts estructurados.\n• Realización de pruebas y optimización de agentes IA.\n• Integración y pruebas con API de WhatsApp para automatización de comunicación.\n• Análisis y documentación de procesos mediante diagramas y reportes técnicos.\n• Elaboración de manuales de uso para plataformas inteligentes.\n• Generación de respaldos de información de clientes y seguimiento de proyectos tecnológicos.\n\nEmpleado - Vanessa Joyas | Aguascalientes, México (Diciembre 2021 – Enero 2026)\n• Venta de joyas y atención al cliente.\n• Reparación de piezas y diseño en Adobe Illustrator.\n• Manejo de software de grabado y corte láser.\n• Realización y actualización de inventarios digitales.\n• Mantenimiento a equipos de cómputo y manejo de impresoras 3D.',
    education: 'Ingeniería en Sistemas Computacionales - Universidad Politécnica de Aguascalientes | Aguascalientes, México (Septiembre 2023 – Presente, 8.° cuatrimestre)\n• Doble titulación en curso: Bachelor of Science in Computer Engineering – Carver University, Florida.',
    languages: 'Español – Nativo | Inglés – Competencia laboral profesional',
    skills: 'Java (básico), Python (básico), Oracle, SQL (básico), Adobe Illustrator, Software de grabado/corte láser, Impresoras 3D, Mantenimiento de equipos de cómputo, Trabajo en equipo, Pensamiento analítico, Resolución de problemas, Adaptabilidad'
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
            la interfaz CVData para que la función 'handleChange' funcione bien.
            Agrego 'value' en cada campo para que se muestre mi información 
            precargada apenas se abre el formulario. */}
        <div className="input-group">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Summary:</label>
          <textarea name="summary" value={formData.summary} onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Experience:</label>
          <textarea name="experience" value={formData.experience} onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Education:</label>
          <textarea name="education" value={formData.education} onChange={handleChange} rows={3} required></textarea>
        </div>

        <div className="input-group">
          <label>Languages:</label>
          <input type="text" name="languages" value={formData.languages} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Skills:</label>
          <input type="text" name="skills" value={formData.skills} onChange={handleChange} required />
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