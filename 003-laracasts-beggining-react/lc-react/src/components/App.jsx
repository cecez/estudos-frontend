import "../reset.css";
import "../App.css";
import TodoForm from "./TodoForm";
import NoTodos from "./NoTodos";
import { useState } from "react";
import TodoList from "./TodoList";

function App() {
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

  return (
    <div className="todo-app-container">
      <div className="todo-app">
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
            />
            <div className="check-all-container">
              <div>
                <div className="button">Check All</div>
              </div>
              <span>3 items remaining</span>
            </div>
            <div className="other-buttons-container">
              <div>
                <button className="button filter-button filter-button-active">
                  All
                </button>
                <button className="button filter-button">Active</button>
                <button className="button filter-button">Completed</button>
              </div>
              <div>
                <button className="button">Clear completed</button>
              </div>
            </div>
          </>
        ) : (
          <NoTodos />
        )}
      </div>
    </div>
  );
}
export default App;
