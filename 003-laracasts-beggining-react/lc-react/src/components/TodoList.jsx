import React, { useContext } from "react";
import TodoFilters from "./TodoFilters";
import TodoItemsRemaining from "./TodoItemsRemaining";
import ClearCompleted from "./ClearCompleted";
import CheckAll from "./CheckAll";
import useToggle from "../hooks/useToggle";
import { TodosContext } from "../context/TodosContext";
import { CSSTransition } from "react-transition-group";

function TodoList(props) {
  const { todosFiltered, todos, setTodos } = useContext(TodosContext);
  const [isFeatureOneVisible, toggleFeatureOne] = useToggle(true);
  const [isFeatureTwoVisible, toggleFeatureTwo] = useToggle(true);

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
    <>
      <ul className="todo-list">
        {todosFiltered().map((item, _index) => (
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
                      props.updateTodoTitle(event, item.id);
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
            <button className="x-button" onClick={() => handleDelete(item.id)}>
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

      <div className="feature-toggler">
        <button className="button" onClick={toggleFeatureOne}>
          Feature One
        </button>
        <button className="button" onClick={toggleFeatureTwo}>
          Feature Two
        </button>
      </div>

      <CSSTransition
        in={isFeatureOneVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="check-all-container">
          <div>
            <CheckAll />
          </div>
          <TodoItemsRemaining />
        </div>
      </CSSTransition>

      <CSSTransition
        in={isFeatureTwoVisible}
        timeout={300}
        classNames="slide-vertical"
        unmountOnExit
      >
        <div className="other-buttons-container">
          <TodoFilters />
          <div>
            <ClearCompleted />
          </div>
        </div>
        </CSSTransition>
    </>
  );
}

export default TodoList;
