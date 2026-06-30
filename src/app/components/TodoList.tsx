
interface TodoListProps { //son los parametrso que recibimos y esperamos regresar
    tasks2: string[];
}

export default function TodoList ({tasks2} : TodoListProps) {
    return(
        <ul>
            {tasks2.map((task, index) => (
                <li key={index}>
                    {task}
                </li>
            ))}
        </ul>
    )
}