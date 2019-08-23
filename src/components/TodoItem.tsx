import React from 'react';

export interface Todo {
  todo: string;
  done: boolean;
}

const TodoItem: React.FC<{todo: Todo, itemChange: (todo: string) => void }> = props => (
  <li>
    <span>{props.todo.todo}</span>
    <input type="checkbox" checked={props.todo.done} onChange={() => props.itemChange(props.todo.todo)} />
  </li>
);

export default TodoItem;
