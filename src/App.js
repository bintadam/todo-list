import {useState} from "react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo"
import CompletedTodos from "./components/CompletedTodos";
import { useMediaQuery } from "react-responsive";

const items = [
  {id:1, text:"buy groceries", done: false},
  {id:2, text:"finish painting", done: false},
  {id:3, text:"exercise daily", done: false},
]

const completedItems = [
  {id:4, text:"play football", done:true},
  {id:5, text:"wake up early", done:true}
]


function App(){
  const isDesktop = useMediaQuery({query: "(min-width : 1224px)"});
  const isMobile = useMediaQuery({query: "(max-width: 1223px)"});

  const [todos, setTodos] = useState(items);
  const [completedTodos, setCompletedTodos] = useState(completedItems)

  function addTodo(text){
    const newTodo = {id:Date.now(), text, done:false};
    setTodos([...todos, newTodo])
  }

  function toggleTodo(id){

    const completedTodo = todos.find(todo => todo.id === id);
    setCompletedTodos([...completedTodos, completedTodo]);
    
    const updatedTodos = todos.filter((todo) => 
      todo.id !== id 
    );
    setTodos(updatedTodos)

  }

  return (
    <>

      {isDesktop && (
        <div className="bg-teal-200 h-screen pt-12">
          <div className="bg-custom-green-default border-1 px-24 pt-8 w-2/5 ml-96 h-4/5">
          <h1 className="text-center text-white font-bold text-3xl mb-4"> My Todo List</h1>
            <AddTodo onAdd={addTodo}/>
            <TodoList todos={todos} onToggle={toggleTodo}/>
            <CompletedTodos todos={completedTodos}/>
          </div>
        </div>
      )}

      {isMobile && (

          <div className="h-screen bg-custom-green-default border-1 px-4">
            <h1 className="text-center text-white font-bold text-2xl p-4"> My Todo List</h1>
            <AddTodo onAdd={addTodo}/>
            <TodoList todos={todos} onToggle={toggleTodo}/>
            <CompletedTodos todos={completedTodos}/>
          </div>
      )}
      
  </>
  )

}

export default App;
