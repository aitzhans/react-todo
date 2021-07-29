import React, { useContext } from 'react';

import { TodoListContext } from '../todo-context/todoContext';
import TodoItem from '../todo-item';

export default function TodoList() {
  const { visibleTodos } = useContext(TodoListContext);

  return (
    <>
      {visibleTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
}
