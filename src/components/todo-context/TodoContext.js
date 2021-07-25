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

  const deleteTodo = (todo) => {
    setTodos([
      ...todos.filter((el) => el.id !== todo.id)
    ]);
  };

  const editTodo = (todo) => {
    console.log('edited', todo);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
