import React from 'react';
import { useSelector } from 'react-redux';

import { FILTERS } from '../../consts/consts';
import TodoItem from '../todo-item/TodoItem';

const selectVisibleTodos = ({ todos, selectedTab }) => {
  switch (selectedTab) {
    case FILTERS.TODO:
      return todos.filter((todo) => !todo.done);
    case FILTERS.DONE:
      return todos.filter((todo) => todo.done);
    default:
      return todos;
  }
};

export default function TodoList() {
  const visibleTodos = useSelector(selectVisibleTodos);

  return (
    <>
      {visibleTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
}
