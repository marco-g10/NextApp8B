'use client'

import { useEffect, useState } from "react"
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

export default function Page(){

    const [inputValue, setInputValue] = useState<string>(''); //string
    const [tasks, setTasks] = useState<string[]>([]); //array

    const addTask = (task: string) => {
        setTasks([...tasks, task]);

    }

    useEffect(() => {
        console.log(tasks);
    }, [tasks])

    return(
        <div>
           <TodoForm onAddTodo={addTask} />

           <TodoList tasks2 = {tasks} />
        </div>
    )
}