function Todo({todo, onToggle}){
    return (
        <li className={`text-slate-100 font-light text-base mt-2 p-2 border rounded-md bg-custom-green-default ${todo.done ? 'line-through opacity-60' : ''}`}>
            <input className="mr-1 rounded-full" type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}/>
            {todo.text}
        </li>
    )
}

export default Todo;