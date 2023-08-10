function Todo({todo, onToggle}){
    return (
        <li className="text-slate-200 font-light text-lg mt-1 p-2 border rounded-md opacity-90">
            <input className="mr-1 rounded-full" type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}/>
            {todo.text}
        </li>
    )
}

export default Todo;