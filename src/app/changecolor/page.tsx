'use client';

import { useState } from 'react';

export default function Page() {

    let color: string = "";
    const [backColor, setBackColor] = useState('blue')

    const changeColor = (newColor: string) => {
        color = newColor;
        setBackColor(newColor)
        console.log(color);
    };

    return (
        <div style={{ height: '100vh', background: backColor}}>
            <h1>Cambiar el color del fondo {backColor}</h1>

            <button onClick={() => changeColor("yellow")}>Amarillo</button>
            <br/>
            <button onClick={() => changeColor("green")}>Verde</button>
            <br/>
            <button onClick={() => changeColor("red")}>Rojo</button>
        </div>
    );
}