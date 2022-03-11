import React from "react";
import PropTypes from "prop-types";
import TodoItemsRemaining from "./TodoItemsRemaining";
import ClearCompleted from "./ClearCompleted";
import CheckAll from "./CheckAll";

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleCheckItem: PropTypes.func.isRequired,
  markAsEditing: PropTypes.func.isRequired,
  updateTodoTitle: PropTypes.func.isRequired,
  cancelEditing: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  remainingItems: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
  checkAll: PropTypes.func.isRequired,
};

function TodoList(props) {
  return (
    <>
      <ul className="todo-list">
        {props.todos.map((item, _index) => (
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
      <div className="check-all-container">
        <div>
          <CheckAll checkAll={props.checkAll} />
        </div>

        <TodoItemsRemaining remainingItems={props.remainingItems} />
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
          <ClearCompleted clearCompleted={props.clearCompleted} />
        </div>
      </div>
    </>
  );
}

export default TodoList;
