import React, { createContext, useReducer } from 'react';
import { todoReducer, initialState } from './todoReducer';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const [ todos, dispatch ] = useReducer(todoReducer, initialState);
  const editedTodo = todos.find((todo) => todo.isEdited);

  return (
    <TodoListContext.Provider value={{ todos, dispatch, editedTodo }}>
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
