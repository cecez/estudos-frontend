import React, { useContext, useMemo } from "react";
import { TodosContext } from "../context/TodosContext";

function TodoItemsRemaining() {
  const { todos } = useContext(TodosContext);

  const remainingItemsCalculation = () => {
    // simulando algo expensivo
    console.log("fui chamado, calculando algo custoso...");
    return todos.filter((item) => !item.isComplete).length;
  };

  // returns a memoized value (caching a value)
  const remainingItems = useMemo(remainingItemsCalculation, [todos]);

  return <span>{remainingItems} items remaining</span>;
}

export default TodoItemsRemaining;
