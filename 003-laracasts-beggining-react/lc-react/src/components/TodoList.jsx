import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoFilters from "./TodoFilters";
import TodoItemsRemaining from "./TodoItemsRemaining";
import ClearCompleted from "./ClearCompleted";
import CheckAll from "./CheckAll";
import useToggle from "../hooks/useToggle";

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  todosFiltered: PropTypes.func.isRequired,
  toggleCheckItem: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodoTitle: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
};

function TodoList(props) {
  const [isFeatureOneVisible, toggleFeatureOne] = useToggle(true);
  const [isFeatureTwoVisible, toggleFeatureTwo] = useToggle(true);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <ul className="todo-list">
        {props.todosFiltered(filter).map((item, _index) => (
          <li className="todo-item-container" key={item.id}>
            <div className="todo-item">
              <input
                type="checkbox"
                onChange={() => props.toggleCheckItem(item.id)}
                checked={item.isComplete}
              />
              {item.isEditing ? (
                <input
                  type="text"
                  className="todo-item-input"
                  onBlur={(event) => props.updateTodoTitle(event, item.id)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      props.updateTodoTitle(event, item.id);
                    } else if (event.key === "Escape") {
                      props.cancelEditing(item.id);
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
                  onDoubleClick={() => props.markAsEditing(item.id)}
                >
                  {item.title}
                </span>
              )}
            </div>
            <button
              className="x-button"
              onClick={() => props.handleDelete(item.id)}
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

      <div className="feature-toggler">
        <button className="button" onClick={toggleFeatureOne}>
          Feature One
        </button>
        <button className="button" onClick={toggleFeatureTwo}>
          Feature Two
        </button>
      </div>

      {isFeatureOneVisible && (
        <div className="check-all-container">
          <div>
            <CheckAll checkAll={props.checkAll} />
          </div>
          <TodoItemsRemaining />
        </div>
      )}

      {isFeatureTwoVisible && (
        <div className="other-buttons-container">
          <TodoFilters setFilter={setFilter} filter={filter} />
          <div>
            <ClearCompleted clearCompleted={props.clearCompleted} />
          </div>
        </div>
      )}
    </>
  );
}

export default TodoList;
