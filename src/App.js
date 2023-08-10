import {useState} from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"

const items = [
  {id:1, text:"buy groceries", done: false},
  {id:2, text:"finish painting", done: false},
  {id:3, text:"exercise daily", done: false}
]


function App(){
  const [todos, setTodos] = useState(items);

  let completed = []

  function addTodo(text){
    const newTodo = {id:Date.now(), text, done:false};
    setTodos([...todos, newTodo])
  }

  function toggleTodo(id){
    
    const updatedTodos = todos.map((todo) => 
      todo.id === id ? {...todo, done:!todo.done} : todo
    )

    setTodos(updatedTodos)

  }

  const complete = todos.map((todo) => {
    if(!todo.done){
      completed.push(todo)
    }
    return completed
  })

  return (

    <div className="bg-custom-green-light h-screen pt-12">
      <div className="bg-custom-green-default border-1 px-24 pt-8 w-2/5 ml-96 h-4/5">
      <h1 className="text-center text-white font-bold text-3xl mb-4"> My Todo List</h1>
        <AddTodo onAdd={addTodo}/>
        <TodoList todos={todos} onToggle={toggleTodo}/>
        <CompletedTask onComplete={complete}/>
      </div>
    </div>

  )

}

export default App;
