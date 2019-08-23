import React, { Component } from "react";

import TodoItem, { Todo } from "./TodoItem";

interface TodoListState {
  todos: Todo[];
}

class TodoList extends Component<any, TodoListState> {
  state = {
    todos: [
      { todo: "fdjakfdjlas", done: true },
      { todo: "Take out the trash", done: false },
      { todo: "Learn React", done: false },
    ],
  };

  constructor(props: any) {
    super(props);

    this.handleTodoChange.bind(this);
  }

  handleTodoChange(todo: string): void {
    // Create a copy of the current array
    const todos = [...this.state.todos];
    // Get the item's index in the array
    let currentTodoIndex = todos.findIndex(item => item.todo === todo);
    // Toggle the done flag
    todos[currentTodoIndex].done = !todos[currentTodoIndex].done;
    // Update state
    this.setState({ todos });
  }

  render() {
    return (
      <div>
        <h1>Todo list</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <TodoItem todo={todo} itemChange={this.handleTodoChange} key={index} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
