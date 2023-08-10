function Todo({todo, onToggle}){
    return (
        <li>
            <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}/>
            {todo.text}
        </li>
    )
}

export default Todo;