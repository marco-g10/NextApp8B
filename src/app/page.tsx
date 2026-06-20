'use client'

export default function Home() {

  //Logica o el JS
  let name: string = "Marco"; //varieble let - var (ya no se usa)
  const title: string = "Lista";  //declaramos contantes los valores nunca cambiaran

  const frutialumnos: string[] = [
    "Durazniel",
    "Platanito",
    "Cerevelyn",
    "Cocarlos",
    "Kiwiker",
    "Marielina",
    "Manzavera"
  ];

  //Funciones
  const monstrarFrutas = () => {
    console.log(frutialumnos);
  }
 
  return (
    <div>
      <h1>{title}</h1>
        Hola 8B los saluda {name}

        <br></br>
        <br></br>

        <button onClick={monstrarFrutas}>
          Mostrar
        </button>

        <br></br>
        <br></br>

        <ul>
          {frutialumnos.map((fruta, index) => (
            <li key={index}>
              {fruta}
            </li>
          ))}

          {frutialumnos.map((fruta) => {
              let x = 0;
            return(
            <li>
              {fruta}
            </li>
            )
          })}
        </ul>
    </div>
  );
}
