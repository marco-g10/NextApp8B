'use client'
import Image from "next/image";

export default function Home() {

//logica o el JS
let name:string = "Jonathan";
const title: string = "Lista";

const frutialumnos: string[] = [
  "Durazniel",
  "Platanito",
  "Kiwiker",
  "Marielina",
  "Cerevelin"
];

const mostrarFrutas = () => {
}
  console.log("hola");

  return (
  // children corresponde a las paginas 
    <div >
        Hola 8B los saluda {name}

        <br></br>

        <button onClick={mostrarFrutas} >
          Mostrar
        </button>

        <br></br>

        <ul>
          <li>Mike</li>
          <li>Carlitos</li>
          <li>Pancho</li>
        </ul>

        <ul>
          {/* 1. Agrega "index" al lado de fruta */}
          {frutialumnos.map((fruta, index)=> (
            <li key={index}> 
              {fruta}
            </li>
          ))}
        </ul>

    </div>
  //*********** 
  );
}
