import Todo from "./Todo";

function CompletedTodos({todos}){
    return (
        <>
            <p className="mt-4 font-thin text-slate-300 text-sm ">Completed List</p>
            <ul> 
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
    </>
    )
}

export default CompletedTodos;