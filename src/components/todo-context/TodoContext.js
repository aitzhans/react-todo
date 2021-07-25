import React, { createContext, useState } from 'react';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const { children } = props;
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([
    { title: 'Cook the breakfast', done: false, id: 1 },
    { title: 'Wash the dishes', done: true, id: 2 },
    { title: 'Write some code', done: false, id: 3 },
  ]);

  const addTodo = (title) => {
    setTodos([
      ...todos,
      { title, done: false, id: new Date().getUTCMilliseconds() },
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

  const checkUncheck = (todo) => {
    const updatedTodo = {
      ...todo,
      done: !todo.done
    };
    const updatedTodos = todos.map((el) => {
      if (el.id === todo.id) {
        return updatedTodo;
      }
      return el;
    });
    setTodos([
      ...updatedTodos
    ]);
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        checkUncheck
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
