import "../reset.css";
import "../App.css";
import TodoForm from "./TodoForm";
import NoTodos from "./NoTodos";
import { useEffect, useMemo, useRef, useState } from "react";
import TodoList from "./TodoList";

function App() {

  // hook para ter uma referência para um elemento
  const nameInputEl = useRef(null);

  const [name, setName] = useState("");

  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Meu primeiro item",
      isComplete: false,
      isEditing: false,
    },
    {
      id: 2,
      title: "Segundo todo",
      isComplete: true,
      isEditing: false,
    },
  ]);
  const [idForTodo, setIdForTodo] = useState(3);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: title,
        isComplete: false,
      },
    ]);
    setIdForTodo((previousId) => previousId + 1);
  };

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

  const remainingItemsCalculation = () => {
    // simulando algo expensivo
    console.log("fui chamado, calculando algo custoso...");
    return todos.filter((item) => !item.isComplete).length;
  };

  // returns a memoized value (caching a value)
  const remainingItems = useMemo(remainingItemsCalculation, [todos]);

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

  return (
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
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          {name && <p className="name-label">Hello, {name}</p>}
        </div>

        <h2>Todo App</h2>
        <TodoForm addTodo={addTodo} />

        {todos.length > 0 ? (
          <>
            <TodoList
              todos={todos}
              toggleCheckItem={toggleCheckItem}
              markAsEditing={markAsEditing}
              updateTodoTitle={updateTodoTitle}
              cancelEditing={cancelEditing}
              handleDelete={handleDelete}
              remainingItems={remainingItems}
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
  );
}
export default App;
