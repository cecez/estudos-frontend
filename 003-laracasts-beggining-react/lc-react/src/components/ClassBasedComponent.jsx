import React, { Component } from "react";

// formato anterior para criar componentes
export default class ClassBasedComponent extends Component {
  constructor(props) {
    super(props);
    // forma de declarar state em componentes baseados em classe
    this.state = {
      todos: [
        {
          id: 1,
          title: "Meu primeiro item",
          isComplete: false,
        },
        {
          id: 2,
          title: "Segundo todo",
          isComplete: true,
        },
      ],
    };
  }

  // exemplo de formato para atualizar state
  addTodo = (event) => {
    event.preventDefault();

    this.setState((previousState) => {
      const newTodos = [
        ...previousState.todos,
        {
          id: 4,
          title: "titulo",
          isComplete: false,
        },
      ];

      return { todos: newTodos };
    });
  };

  render() {
    return (
      <div>
        Componente baseado em classe, para acessar estado: Existem{" "}
        {this.state.todos.length} itens.
      </div>
    );
  }
}
