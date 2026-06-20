'use client'

import { useEffect, useState } from "react"

export default function Page(){

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        console.log("Se ejecuta en cada render");
    })

    useEffect(() => {
            setTimeout(() => {
                console.log('Hello from API');
            }, 2000);
    }, []);  //Se renderiza al renderizar el componente
    
    useEffect(() => {
            console.log("inside event", count);
            document.title = `Contador: ${count}`;
    }, [count]);

    return(
        <div>
            <p>Hola</p>
            <button onClick={() => setCount(count +1)}>Incrementar</button>
        </div>
    )
}