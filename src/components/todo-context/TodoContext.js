import React, { createContext, useReducer, useState } from 'react';
import { todoReducer, initialState } from './todoReducer';
import { FILTERS } from '../consts/consts';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [ todos, dispatch ] = useReducer(todoReducer, initialState);
  const editedTodo = todos.find((todo) => todo.isEdited);

  const [selectedTab, setSelectedTab] = useState(FILTERS.TODO);

  const selectTodosBySelectedTab = (tabName, todos) => {
    switch (tabName) {
      case FILTERS.TODO:
        return todos.filter((todo) => !todo.done);
      case FILTERS.DONE:
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  };

  const visibleTodos = selectTodosBySelectedTab(selectedTab, todos);

  return (
    <TodoListContext.Provider value={{
      todos, dispatch, editedTodo, selectedTab, setSelectedTab, visibleTodos
    }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
