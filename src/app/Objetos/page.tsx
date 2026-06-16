
type Fruta = {
    id: number;
    name: string;
    color: string;
    suggar: boolean;
};

export default function Page(){

    //ista de objetos
    const frutialumnos: Fruta[] = [
        {
            id: 1,
            name: "Durazniel",
            color: "Najara",
            suggar: true
        },
        {
            id: 2,
            name: "Platanito",
            color: "Amarillo",
            suggar: false
        },
        {
            id: 3,
            name: "Cerevelyn",
            color: "Rojo",
            suggar: false
        }
    ]


    return(
        <div>
            Hola desde otra pagina

            {frutialumnos.map((fruta) => (
                <div>
                    <h2>{fruta.name}</h2>

                    <p>Color: {fruta.color}</p>

                    <p>
                        Es dulce? 
                        {
                            fruta.suggar ? "Si" : "No"
                        }
                    </p>

                    <br></br>

                </div>
            ))}
        </div>
    )
}