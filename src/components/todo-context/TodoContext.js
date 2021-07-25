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

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { todo, done: false, id: new Date().getUTCMilliseconds() },
    ]);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
