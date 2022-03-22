import "../reset.css";
import "../App.css";
import TodoForm from "./TodoForm";
import NoTodos from "./NoTodos";
import { useEffect, useMemo, useRef } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import TodoList from "./TodoList";
import { TodosContext } from "../context/TodosContext";

function App() {
  // hook para ter uma referência para um elemento
  const nameInputEl = useRef(null);
  const [name, setName] = useLocalStorage("name", "");
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [idForTodo, setIdForTodo] = useLocalStorage("idForTodo", 1);

  const handleDelete = (todoId) => {
    setTodos([...todos].filter((item) => item.id !== todoId));
  };

  const toggleCheckItem = (todoId) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const markAsEditing = (todoId) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        item.isEditing = true;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const cancelEditing = (todoId) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === todoId) {
        item.isEditing = false;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  const updateTodoTitle = (event, id) => {
    const updatedTodos = todos.map((item) => {
      if (item.id === id) {
        if (event.target.value.trim().length === 0) {
          item.isEditing = false;
          return item;
        }
        item.title = event.target.value;
        item.isEditing = false;
      }
      return item;
    });
    setTodos(updatedTodos);
  };

  

  const clearCompleted = () => {
    setTodos([...todos].filter((item) => !item.isComplete));
  };

  const checkAll = () => {
    const checkedItens = todos.map((item) => {
      item.isComplete = true;
      return item;
    });
    setTodos(checkedItens);
  };

  const todosFiltered = (filter) => {
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
    <TodosContext.Provider value={{ todos, setTodos, idForTodo, setIdForTodo }}>
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
                toggleCheckItem={toggleCheckItem}
                markAsEditing={markAsEditing}
                updateTodoTitle={updateTodoTitle}
                cancelEditing={cancelEditing}
                handleDelete={handleDelete}
                clearCompleted={clearCompleted}
                checkAll={checkAll}
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
