'use client'

import { useState, useEffect } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState<string>('');
  const [tasks, setTasks] = useState<string[]>([]) //array
  

  const addTask = () => {
    setTasks([...tasks, inputValue])
    console.log(tasks)
  }

  useEffect(() => {
    console.log(tasks)

  }, [tasks])
  return (
    <div> 
      <input
        placeholder='Escribe una actividad'
        style={{ background: 'grey' }}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={addTask} style={{ background: 'blue', margin: '1rem' }}>
        Agregar
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
          </li>
        ))}
      </ul>
    </div>
  )
}
