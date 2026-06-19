"use client";
//aqui importo useState para poder guardar datos
import { useState } from "react";

export default function Page() {
  //aqui guardo el nombre que escribe el usuario
  const [nombre, setNombre] = useState("");
  //direccion de la persona
  const [direccion, setDireccion] = useState("");
  //correo que escribe el usuario
  const [email, setEmail] = useState("");
  //pequeño resumen del CV
  const [summary, setSummary] = useState("");
  //experiencia laboral o cosas que ha hecho
  const [experiencia, setExperiencia] = useState("");
  //aqui va la educacion
  const [educacion, setEducacion] = useState("");
  //idiomas que sabe el usuario
  const [idiomas, setIdiomas] = useState("");
  //habilidades o skills
  const [skills, setSkills] = useState("");
  //esto sirve para decidir si se muestra el CV o no
  const [mostrarCV, setMostrarCV] = useState(false);
  //esta funcion se ejecuta cuando se da click al boton
  
  const generarCV = () => {
    //aqui simplemente hacemos que el CV aparezca
    setMostrarCV(true);
  };

  return (
    //contenedor principal de toda la pagina
    <div
      style={{
        padding: "2rem",
        background: "black",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/*titulo principal*/}
      <h1 style={{ color: "blue" }}>Formulario CV</h1>

      {/*aqui se escribe el nombre*/}
      <input
        placeholder="Escribe tu nombre"
        //valor actual del input
        value={nombre}
        //cada vez que escribe algo se guarda
        onChange={(e) => setNombre(e.target.value)}
        //estilos del input
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*input para la direccion*/}
      <input
        placeholder="Escribe tu dirección"
        value={direccion}
        //aqui se actualiza la direccion
        onChange={(e) => setDireccion(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*input del email*/}
      <input
        placeholder="Escribe tu email"
        value={email}
        //guarda lo que se escribe
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*textarea para el resumen*/}
      <textarea
        placeholder="Summary"
        //valor del summary
        value={summary}
        //actualiza el summary
        onChange={(e) => setSummary(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          height: "70px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*textarea de experiencia*/}
      <textarea
        placeholder="Experiencia"
        value={experiencia}
        //guarda la experiencia
        onChange={(e) => setExperiencia(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          height: "70px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*textarea educacion*/}
      <textarea
        placeholder="Educación"
        value={educacion}
        //actualiza la educacion
        onChange={(e) => setEducacion(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          height: "70px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*input idiomas*/}
      <input
        placeholder="Idiomas"
        value={idiomas}
        //guarda los idiomas
        onChange={(e) => setIdiomas(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*input skills*/}
      <input
        placeholder="Skills"
        value={skills}
        //aqui se guardan las skills
        onChange={(e) => setSkills(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "15px",
          background: "white",
          color: "black",
          border: "none",
        }}
      />

      <br />

      {/*boton para generar el CV*/}
      <button
        onClick={generarCV}
        //estilos del boton
        style={{
          background: "darkblue",
          color: "white",
          padding: "10px",
          border: "none",
        }}
      >
        Generar CV
      </button>

      {/*aqui abajo aparece el CV*/}
      {
        //si mostrarCV es true entonces aparece el CV
        mostrarCV ? (
          <div
            style={{
              background: "#eb1919",
              marginTop: "30px",
              padding: "20px",
              width: "300px",
            }}
          >
            {/*nombre del usuario*/}
            <h2>{nombre}</h2>

            {/*direccion*/}
            <p>
              <b>Dirección:</b> {direccion}
            </p>

            {/*correo*/}
            <p>
              <b>Email:</b> {email}
            </p>

            {/*resumen*/}
            <p>
              <b>Summary:</b> {summary}
            </p>

            {/*experiencia*/}
            <p>
              <b>Experiencia:</b> {experiencia}
            </p>

            {/*educacion*/}
            <p>
              <b>Educación:</b> {educacion}
            </p>

            {/*idiomas*/}
            <p>
              <b>Idiomas:</b> {idiomas}
            </p>

            {/*habilidades*/}
            <p>
              <b>Skills:</b> {skills}
            </p>
          </div>
        ) : null
      }
    </div>
  );
}
