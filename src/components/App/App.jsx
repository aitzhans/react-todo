import React from 'react';
import TodoListContextProvider from '../todo-context/TodoContext';

import TodoHeader from '../todo-header/TodoHeader';
import TodoList from '../todo-list/TodoList';

export default function App() {
  return (
    <TodoListContextProvider>
      <div>
        <TodoHeader />
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
}
