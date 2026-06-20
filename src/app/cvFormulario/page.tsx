"use client";

// Importamos useState, que es el hook de React para guardar
// valores que pueden cambiar (los datos del formulario y el CV)
import { useState } from "react";

export default function Page() {

  // ===================== ESTADOS DEL FORMULARIO =====================
  // Cada useState guarda lo que el usuario va escribiendo en cada campo
  const [nombre, setNombre] = useState("");
  const [direccion, setDireccion] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const [educacion, setEducacion] = useState("");
  const [idiomas, setIdiomas] = useState("");
  const [skills, setSkills] = useState("");

  // ===================== ESTADO DEL CV =====================
  // Aqui guardamos los datos que ya fueron "confirmados" con el boton
  // Empieza vacio porque el CV no se llena hasta que el usuario presiona Generar CV
  const [cv, setCv] = useState({
    nombre: "",
    direccion: "",
    email: "",
    summary: "",
    experiencia: "",
    educacion: "",
    idiomas: "",
    skills: "",
  });

  // Funcion que se ejecuta al hacer click en el boton "Generar CV"
  // Toma todo lo que esta en los estados del formulario y lo copia al estado del CV
  function generarCV() {
    setCv({
      nombre: nombre,
      direccion: direccion,
      email: email,
      summary: summary,
      experiencia: experiencia,
      educacion: educacion,
      idiomas: idiomas,
      skills: skills,
    });
  }

  return (
    <div>
      <h1>Formulario para generar CV</h1>

      {/* ===================== FORMULARIO ===================== */}
      {/* Cada input usa onChange para actualizar su estado cada vez que el usuario escribe */}

      {/* A cada input/textarea le ponemos color de texto negro y fondo blanco */}
      {/* directo con "style", para que se vea bien sin importar el tema oscuro */}
      {/* que trae la plantilla del profe en globals.css */}

      <p>
        Nombre:<br />
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Direccion:<br />
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Email:<br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Summary:<br />
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Experiencia:<br />
        <textarea
          value={experiencia}
          onChange={(e) => setExperiencia(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Educacion:<br />
        <textarea
          value={educacion}
          onChange={(e) => setEducacion(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Idiomas:<br />
        <input
          type="text"
          value={idiomas}
          onChange={(e) => setIdiomas(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      <p>
        Skills:<br />
        <input
          type="text"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
          style={{ color: "black", backgroundColor: "white" }}
        />
      </p>

      {/* Boton que llama a la funcion generarCV cuando se hace click */}
      <button onClick={generarCV}>Generar CV</button>

      <hr />

      {/* ===================== CV ===================== */}
      {/* Aqui se muestran los valores guardados en el estado "cv" */}
      {/* Esto solo se actualiza cuando se presiona el boton de arriba */}

      <h2>CV</h2>

      <p><b>Nombre:</b> {cv.nombre}</p>
      <p><b>Direccion:</b> {cv.direccion}</p>
      <p><b>Email:</b> {cv.email}</p>

      <p><b>Summary:</b></p>
      <p>{cv.summary}</p>

      <p><b>Experiencia:</b></p>
      <p>{cv.experiencia}</p>

      <p><b>Educacion:</b></p>
      <p>{cv.educacion}</p>

      <p><b>Idiomas:</b> {cv.idiomas}</p>
      <p><b>Skills:</b> {cv.skills}</p>
    </div>
  );
}