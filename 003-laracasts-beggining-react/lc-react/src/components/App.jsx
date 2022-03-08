import "../reset.css";
import "../App.css";
import { useState } from "react";

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

  const addTodo = (event) => {
    event.preventDefault();

    if (todoInput.trim().length === 0) {
      return;
    }

    setTodos([
      ...todos,
      {
        id: idForTodo,
        title: todoInput,
        isComplete: false,
      },
    ]);
    setTodoInput("");
    setIdForTodo((previousId) => previousId + 1);
  };

  const [todoInput, setTodoInput] = useState("");

  const handleInput = (event) => {
    setTodoInput(event.target.value);
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
        <form action="#" onSubmit={addTodo}>
          <input
            type="text"
            value={todoInput}
            onChange={handleInput}
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          {todos.map((item, _index) => (
            <li className="todo-item-container" key={item.id}>
              <div className="todo-item">
                <input
                  type="checkbox"
                  onChange={() => toggleCheckItem(item.id)}
                  checked={item.isComplete}
                />
                {item.isEditing ? (
                  <input
                    type="text"
                    className="todo-item-input"
                    onBlur={(event) => updateTodoTitle(event, item.id)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        updateTodoTitle(event, item.id);
                      } else if (event.key === "Escape") {
                        cancelEditing(item.id);
                      }
                    }}
                    defaultValue={item.title}
                    autoFocus
                  />
                ) : (
                  <span
                    className={`todo-item-label ${
                      item.isComplete && "line-through"
                    }`}
                    onDoubleClick={() => markAsEditing(item.id)}
                  >
                    {item.title}
                  </span>
                )}
              </div>
              <button
                className="x-button"
                onClick={() => handleDelete(item.id)}
              >
                <svg
                  className="x-button-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>

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
      </div>
    </div>
  );
}
export default App;
