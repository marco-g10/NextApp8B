"use client";

import { useState } from "react";

//Base para nuestro cv
interface CVINFO {
    name: string;
    address: string;
    email: string;
    summary: string;
    experience: string;
    education: string;
    languages: string;
    skills: string;
}

//A nuestra base le damos strings vacios, para poder rellenarlos despues
const cvBase: CVINFO = {
    name: "",
    address: "",
    email: "",
    summary: "",
    experience: "",
    education: "",
    languages: "",
    skills: "",
};

export default function Page() {
    /*Definimos nuestas constantes, form y setForm se usa con la base de CVINFO y lo rellenamos con los strings vacios.
    cv y setCV se le dan dos estados, uno con lo que se da en CVINFO y otro sin nada, los dos los damos como validos*/
    const [form, setForm] = useState<CVINFO>(cvBase);
    const [cv, setCV] = useState<CVINFO | null>(null);


    //Campo recibe el valor de lo que se define en CVINFO y valor como lo que ponemos en el formulario
    const llenarCampo = (campo: keyof CVINFO, valor: string) => {
        setForm({
            ...form, //Actualiza el estado
            [campo]: valor, //Cambia el valor del campo al que estamos apuntando
        });
    };

    //Se pone la informacion que dimos en el formulario
    const crearCV = () => {
        setCV(form); 
    };

  return (
    <div>
      <h1>Formulario CV</h1>
      <label>Nombre</label>
      <br/>
      {/*Tomamos los valores de nuestro CVINFO y con nuestra funcion mandamos los valores
      del usuario a nuestro formulario*/}
      <input
            value={form.name}
            onChange={(e) => llenarCampo("name", e.target.value)}
      />
      <br/>
      <br/>
      <label>Direccion</label>
      <br />
      <input
            value={form.address}
            onChange={(e) => llenarCampo("address", e.target.value)}
      />
      <input/>   
      <br/>
      <br/>
      <label>Email</label>
      <br/>
      <input
            value={form.email}
            onChange={(e) => llenarCampo("email", e.target.value)}
      />
      <br/>
      <br/>
      <label>Summary</label>
      <br/>
      <textarea
            value={form.summary}
            onChange={(e) => llenarCampo("summary", e.target.value)}
      />
      <br/>
      <br/>
      <label>Experiencia</label>
      <br/>
      <textarea
            value={form.experience}
            onChange={(e) => llenarCampo("experience", e.target.value)}
      />
      <br/>
      <br/>
      <label>Educacion</label>
      <br/>
      <textarea
            value={form.education}
            onChange={(e) => llenarCampo("education", e.target.value)}
      />
      <br/>
      <br/>

      <label>Idiomas</label>
      <br/>
      <input
            value={form.languages}
            onChange={(e) => llenarCampo("languages", e.target.value)}
      />
      <br/>
      <br/>
      <label>Skills</label>
      <br/>
      <input
            value={form.skills}
            onChange={(e) => llenarCampo("skills", e.target.value)}
      />
      <br/>
      <br/>
      <button onClick={crearCV}>Crear CV</button>

      {cv && (
        <div>
            {/*Pegamos nuestro valores al final de la pagina*/}
            <h2>CV</h2>
            <h3>{cv.name}</h3>
            <p>Direccion: {cv.address}</p>
            <p>Email: {cv.email}</p>

            <h4>Summary</h4>
            <p>{cv.summary}</p>

            <h4>Experiencia</h4>
            <p>{cv.experience}</p>

            <h4>Educacion</h4>
            <p>{cv.education}</p>

            <h4>Idiomas</h4>
            <p>{cv.languages}</p>

            <h4>Skills</h4>
            <p>{cv.skills}</p>
        </div>
      )}
    </div>
  );
}