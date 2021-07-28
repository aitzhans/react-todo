import React, { useContext } from 'react';
// import { FlexRow } from '@epam/loveship';
// import { DataTable, FlexCell } from '@epam/loveship';
// import { useArrayDataSource } from '@epam/uui';

// import { TodoListContext } from '../todo-context/todoReducer';
import { TodoListContext } from '../todo-context/todoContext';
import TodoItem from '../todo-item';

export default function TodoList() {
  const { todos } = useContext(TodoListContext);
  // console.log(todos);

  return (
    <>
      {todos.map((todo) => <TodoItem todo={todo} key={todo.id} />)}
    </>
  );
}
