import Todo from "./Todo";

function TodoList({todos, onToggle}){
    return (
        <ul>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} onToggle={onToggle}/>
            ))}
        </ul>
    )
}

export default TodoList;