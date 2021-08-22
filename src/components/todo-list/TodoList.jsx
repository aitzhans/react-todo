import React, {
  useContext,
} from 'react';

import { TodoListContext } from '../todo-context/todoContext';
import { FILTERS } from '../consts/consts';

import TodoItem from '../todo-item/TodoItem';

export default function TodoList() {
  const { todos, selectedTab } = useContext(TodoListContext);

  const selectTodosBySelectedTab = (tabName, allTodos) => {
    switch (tabName) {
      case FILTERS.TODO:
        return allTodos.filter((todo) => !todo.done);
      case FILTERS.DONE:
        return allTodos.filter((todo) => todo.done);
      default:
        return allTodos;
    }
  };

  // const visibleTodos = useMemo(() => selectTodosBySelectedTab(selectedTab, todos), [selectedTab, todos]);
  const visibleTodos = selectTodosBySelectedTab(selectedTab, todos);

  return (
    <>
      {visibleTodos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
}
