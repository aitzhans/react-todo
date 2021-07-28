import React from 'react';
import TodoListContextProvider from '../todo-context/todoContext';

import TodoHeader from '../todo-header/TodoHeader';
import TodoAddForm from '../todo-add-form/TodoAddForm';
import TodoList from '../todo-list/TodoList';
// import Tabs from '../tabs/Tabs';

export default function App() {
  return (
    <TodoListContextProvider>
      <div className="wrapper">
        <TodoHeader />
        <TodoAddForm />
        {/* <Tabs /> */}
        <TodoList />
      </div>
    </TodoListContextProvider>
  );
}
