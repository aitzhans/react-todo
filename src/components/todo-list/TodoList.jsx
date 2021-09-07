import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { FILTERS } from '../../consts/consts';
import TodoItem from '../todo-item/TodoItem';

const selectTodosIds = ({ todos, selectedTab }) => {
  switch (selectedTab) {
    case FILTERS.TODO:
      return (todos.filter((todo) => !todo.done)).map((todo) => todo.id);
    case FILTERS.DONE:
      return (todos.filter((todo) => todo.done)).map((todo) => todo.id);
    default:
      return (todos).map((todo) => todo.id);
  }
};

export default function TodoList() {
  const todosIds = useSelector(selectTodosIds, shallowEqual);

  return (
    <>
      {todosIds.map((todoId) => <TodoItem todoId={todoId} key={todoId} />)}
    </>
  );
}
