'use client'
import { useState, useEffect } from "react";

export default function Page() {

    const [inputValue, setInputValue] = useState<string>(''); //para guardar lo que esta en imput se usa el useEstate
    const [labelValue, setLabelValue] = useState<string>('');

    useEffect(() => {
        console.log("Se ejecuta en cada render");
    }, [labelValue])

    return (
        <>
            <input
            placeholder="Escribe algo"
            style={{background:'grey'}}
            value={inputValue}
            //detecta el evento externo y se almacena en la variable e ()evento
            onChange={(e) => setInputValue(e.target.value)}
            />
            <br/> 
            <button onClick={() => setLabelValue(inputValue)}>Cambiar</button>
            <br/> 
            <label>{labelValue}</label>
            
        </>
    )
}
