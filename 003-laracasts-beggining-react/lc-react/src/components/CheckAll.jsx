import React, { useContext } from "react";
import { TodosContext } from "../context/TodosContext";

function CheckAll() {
  const { todos, setTodos } = useContext(TodosContext)

  const checkAll = () => {
    const checkedItens = todos.map((item) => {
      item.isComplete = true;
      return item;
    });
    setTodos(checkedItens);
  };

  return (
    <div onClick={checkAll} className="button">
      Check Todos
    </div>
  );
}

export default CheckAll;
