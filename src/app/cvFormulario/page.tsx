'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';


// 1. DEFINICIÓN DE INTERFACES 

// Aquí defino la interfaz/molde
//que contiene los datos con los que voy a trabajar mi formulario
//como el usuario solo va a ingresar texto, todos los campos de mi interfaz son texto
//definimos esto para evitar errores a la hora de que el usuario ingrese los datos 
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

// 2. DEFINICIÓN DE ESTADOS
 
  
  // Aquí declaré el useState que va a trabajar sobre la interfaz que se creó anteriormente
  //Se empieza con los valores en blanco porque el usuario aun no ha escrito nada 
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

  //En este segundo estado se utiliza para guardar la informacion del usuario una vez que complete el formulario
  // Empieza en null porque al abrir la página todavía no hay nada que mostrar
  // Puede ser CVData(la información del usuario cuando ya lleno el formulario) o null(cuando no tiene nada)
  const [cvData, setCvData] = useState<CVData | null>(null);

 // 3. FUNCIONES DE MANEJO DE EVENTOS 

  // La funcion handleChange para manejar los cambios (cuando el usuario escribe).
  // especifico el tipo del evento (e). 
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    //Con esto se actualiza el estado del formulario
    // Se...formData para hacer una copia de todo antes de cambiar el formulario 
    //y solo cambia la variable name con el nuevo valor
    setFormData({
      ...formData,
      [name]: value
    });
  };


    //Esta funcion solo se ejecuta cuando el usuario presiona el boton del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    //esto evita que la pagina se recargue por defecto cuando mandamos el formulario, esto con el fin de que no se borren los datos de la pantalla 
    e.preventDefault();
    
    //aqui se agarra toda la informacion que el usuario ya creo y los guarda en los campos del cv 
    setCvData(formData);
  };

  return (
    <div>
      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <h2>Crea tu CV</h2>

        {/* Aqui tenemos todos los campos dle cv, en el input, tiene un parametro name, este parametro debe de coincidir con 
          con el mismo parametro de la interfaz cvData para que el programa sepa hacia donde se debe de dirigir la informacion.
          Por ejemplo el primer label Nombre, que en el name es igual al "name" o al nombre que se definio en la interfaz que corresponde
          al nombre de la persona y asi sucesivamente con todos los demas campos*/}

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
        
        {/* Este boton hace sumbmit a toda la informacion que el usuario ya escribio */}
        <button type="submit">Generar CV</button>
      </form>

      {/* CV GENERADO */}
      {/* Esta es una condicion que si el usuario si ingreso informacion y le dio click al boton
          se construye el cv, si no tiene informacion no va a mostrar nada */}
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
