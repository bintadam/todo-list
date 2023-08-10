import Todo from "./Todo";

function TodoList({todos, onToggle}){
    return (
        <>
            <p className="mt-4 font-thin text-slate-300 text-sm ">To-Do List</p>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onToggle={onToggle}/>
                ))}
            </ul>
        </>
    )
}

export default TodoList;