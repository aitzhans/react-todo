import React, {
  createContext, useReducer,
} from 'react';
import { todoReducer, initialState } from './todoReducer';

const defaultValue = {
  todos: [], dispatch: undefined, editedTodo: undefined, selectedTab: null,
};
export const TodoListContext = createContext(defaultValue);

const TodoListContextProvider = (props) => {
  const [ state, dispatch ] = useReducer(todoReducer, initialState);
  const { todos, selectedTab } = state;
  const editedTodo = todos.find((todo) => todo.isEdited);

  return (
    <TodoListContext.Provider value={{
      todos, dispatch, editedTodo, selectedTab,
    }}
    >
      {props.children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
