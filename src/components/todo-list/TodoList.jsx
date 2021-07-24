import React, { useContext } from 'react';

import { TodoListContext } from '../todo-context/TodoContext';
import TodoItem from '../todo-item';

export default function TodoList() {
  const { todos } = useContext(TodoListContext);
  return (
    <ul>
      {todos.map((item) => <TodoItem name={item.todo} key={item.id} />)}
    </ul>
  );
}
