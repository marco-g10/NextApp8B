type Fruta = {
  id: number;
  name: string;
  color: string;
  suggar: boolean;
};

export default function Page() {
  const frutialumnos: Fruta[] = [
    {
      id: 1, // ID único
      name: "Durazniel",
      color: "Najara",
      suggar: true,
    },
    {
      id: 2, // ID único
      name: "Platanito",
      color: "Amarillo",
      suggar: false,
    },
    {
      id: 3, // ID único
      name: "Cerevelyn",
      color: "Rojo",
      suggar: false,
    },
  ];

  return (
    <div>
      Hola desde otra pagina
      {frutialumnos.map((fruta) => (
        // Agregamos el key aquí, llamando al id único de cada fruta
        <div key={fruta.id}>
          <h2>{fruta.name}</h2>
          <p>Color: {fruta.color}</p>
          <p>
            Es dulce?
            {fruta.suggar ? "Si" : "No"}
          </p>
          <br></br>
        </div>
      ))}
    </div>
  );
}