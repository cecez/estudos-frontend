import "../reset.css";
import "../App.css";
import TodoForm from "./TodoForm";
import NoTodos from "./NoTodos";
import { useEffect, useRef, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoList from "./TodoList";
import { TodosContext } from "../context/TodosContext";

function App() {
  // hook para ter uma referência para um elemento
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage("name", "");
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);
  const [filter, setFilter] = useState("all");

  const todosFiltered = () => {
    if (filter === "all") return todos;
    if (filter === "active") return todos.filter((todo) => !todo.isComplete);
    if (filter === "completed") return todos.filter((todo) => todo.isComplete);
  };

  // hook para quando state(s) alterar(em), quando componentes forem montados
  useEffect(() => {
    // callback chamado
    console.log("todos ou o nome foram alterados...");

    return function cleanup() {
      console.log("cleaning up...");
    };
  }, []);

  const handleInputName = (event) => {
    setName(event.target.value);
  };

  return (
    <TodosContext.Provider value={{ todos, setTodos, idForTodo, setIdForTodo, todosFiltered, filter, setFilter }}>
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="name-container">
            <h2>What is your name?</h2>
            <form action="#">
              <input
                type="text"
                className="todo-input"
                placeholder="Tell me your name"
                value={name}
                ref={nameInputEl}
                onChange={handleInputName}
              />
            </form>
            {name && <p className="name-label">Hello, {name}</p>}
          </div>

          <h2>Todo App</h2>
          <TodoForm />

          {todos.length > 0 ? (
            <>
              <TodoList
                todos={todos}
                todosFiltered={todosFiltered}
              />
            </>
          ) : (
            <NoTodos />
          )}
        </div>
      </div>
    </TodosContext.Provider>
  );
}
export default App;
