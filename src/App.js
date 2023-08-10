import {useState} from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"

const items = [
  {id:1, text:"buy groceries", done: false},
  {id:1, text:"finish painting", done: true},
  {id:1, text:"exercise daily", done: false}
]

function App() {
  const [todos, setTodos] = useState(items);

  function addTodo(text){
    const newTodo = {id:Date.now(), text, done:false};
    setTodos(...todos, newTodo)
  }

  return (
    <div className="bg-custom-green-light h-screen pt-24 p-96">
      <h1>Todo List</h1>
      <AddTodo/>
      <TodoList/>
    </div>
  )
}

export default App;
