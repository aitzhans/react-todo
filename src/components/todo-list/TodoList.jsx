import React from 'react';
import { useSelector } from 'react-redux';

import { selectFilteredTodosIds } from '../../reducerSlices/todosSlice';
import TodoItem from '../todo-item/TodoItem';

export default function TodoList() {
  const todoIds = useSelector(selectFilteredTodosIds);

  return (
    <>
      {todoIds.map((todoId) => <TodoItem todoId={todoId} key={todoId} />)}
    </>
  );
}
