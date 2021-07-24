import React from 'react';
import TodoListContextProvider from '../todo-context/TodoContext';

import TodoHeader from '../todo-header/TodoHeader';
import TodoAddForm from '../todo-add-form/TodoAddForm';
import TodoList from '../todo-list/TodoList';

export default function App() {
  return (
    <TodoListContextProvider>
      <div className="wrapper">
        <TodoHeader />
        <TodoAddForm />
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
}
