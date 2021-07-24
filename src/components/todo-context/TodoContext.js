import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const { children } = props;
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { todo: 'Cook the breakfast', id: 1 },
    { todo: 'Wash the dishes', id: 2 },
    { todo: 'Write some code', id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
