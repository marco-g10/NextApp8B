'use client'

import { useState, useEffect } from "react"

export default function Page(){

    const [inputValue, setInputValue] = useState<string>('');

    useEffect(() => {
        console.log("Esta entrando al effect");
    }, [inputValue])

    return(
        <div>
            <input 
            placeholder="Escribir algo"
            style={{ background: 'grey'}}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
            <br/>
            <label>{inputValue}</label>
        </div>
    )
}