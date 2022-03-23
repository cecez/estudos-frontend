import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function ClearCompleted() {
  const { setTodos, todos } = useContext(TodosContext);

  const clearCompleted = () => {
    setTodos([...todos].filter((item) => !item.isComplete));
  };

  return (
    <button onClick={clearCompleted} className="button">
      Clear completed
    </button>
  );
}

export default ClearCompleted;
