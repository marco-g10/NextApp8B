'use client'

import { useState } from "react"

interface TodoFormProps {
    onAddTodo: (task: string) => void;
}


export default function TodoForm({onAddTodo} : TodoFormProps) {
    const [input, setInput] = useState<string>('');

    const handleClick = () => {

        onAddTodo(input);  //Trigger la funcion padre
        setInput('');
    }

    return(
        <div>
            <input
             type="text"
             placeholder="Escribe una tarea"
             value={input}
             onChange={(e) => setInput(e.target.value)}
             />
             <button onClick={handleClick}>
                Agregar
             </button>
        </div>
    )
}