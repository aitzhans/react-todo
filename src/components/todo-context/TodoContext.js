import React, { createContext, useState, useEffect } from 'react';

import FILTERS from '../consts/consts';

export const TodoListContext = createContext();

const TodoListContextProvider = (props) => {
  const { children } = props;

  const [todos, setTodos] = useState([
    { title: 'Cook the breakfast', done: true, id: 1 },
    { title: 'Wash the dishes', done: false, id: 2 },
    { title: 'Write some code', done: false, id: 3 },
  ]);

  const [ filteredTodos, setFilteredTodos ] = useState([
    ...todos.filter((item) => !item.done)
  ]);

  const [ editedValue, setEditedValue] = useState(null);

  const [todosCount, setTodosCount] = useState(filteredTodos.length);

  useEffect(() => {
    setTodosCount(todos.filter((item) => !item.done).length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredTodos]);

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
    setEditedValue(todo);
  };

  const updateTodo = (title) => {
    const updatedTodo = {
      ...editedValue,
      title
    };
    const updatedTodos = todos.map((el) => {
      if (el.id === editedValue.id) {
        return updatedTodo;
      }
      return el;
    });
    setTodos([
      ...updatedTodos
    ]);
    setEditedValue(null);
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

  const filterTodos = (filter) => {
    switch (filter) {
      case FILTERS.ALL:
        setFilteredTodos([
          ...todos
        ]);
        break;
      case FILTERS.TODO:
        setFilteredTodos([
          ...todos.filter((item) => !item.done)
        ]);
        break;
      case FILTERS.DONE:
        setFilteredTodos([
          ...todos.filter((item) => item.done)
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <TodoListContext.Provider
      value={{
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        checkUncheck,
        editedValue,
        updateTodo,
        filteredTodos,
        filterTodos,
        todosCount
      }}
    >
      {children}
    </TodoListContext.Provider>
  );
};

export default TodoListContextProvider;
