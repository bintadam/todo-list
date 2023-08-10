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

  return (

    <div className="bg-custom-green-light h-screen pt-12">
      <h1 className="text-center text-white font-bold text-3xl"> My Todo List</h1>
      <AddTodo onAdd={addTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo}/>
    </div>

  )

}

export default App;
