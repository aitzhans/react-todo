import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { FILTERS } from '../../consts/consts';
import TodoItem from '../todo-item/TodoItem';

const selectTodosIds = ({ todos, filters }) => {
  const { selectedTab } = filters;
  switch (selectedTab) {
    case FILTERS.TODO:
      return Object.keys(todos).filter((key) => !todos[key].done);
    case FILTERS.DONE:
      return Object.keys(todos).filter((key) => todos[key].done);
    default:
      return Object.keys(todos);
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
