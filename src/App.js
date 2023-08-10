import TodoList from "./components/TodoList";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo"

function App() {
return (
  <div className="bg-custom-green-light h-screen pt-24 p-96">
    <TodoList/>
    <Todo/>
    <AddTodo/>

  </div>
)
}

export default App;
