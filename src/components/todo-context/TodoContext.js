import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const { children } = props;
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { todo: 'Cook the breakfast', done: false, id: 1 },
    { todo: 'Wash the dishes', done: true, id: 2 },
    { todo: 'Write some code', done: false, id: 3 },
  ]);

  return (
    <TodoListContext.Provider value={{ todos }}>
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
