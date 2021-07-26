import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { DataTable } from '@epam/loveship';
import { useArrayDataSource } from '@epam/uui';

import TodoItem from '../todo-item';
import Actions from '../todo-actions/Actions';

export default function TodoList() {
  const filteredTodos = useSelector((state) => state.filteredTodos);
  const [value, onValueChange] = useState({});

  const dataSource = useArrayDataSource({
    items: filteredTodos,
  });

  const view = dataSource.useView(value, onValueChange, {});

  const columns = [
    {
      key: 'todo',
      caption: 'Todo Task',
      render: (item) => <TodoItem todo={item} />,
      isAlwaysVisible: true,
      grow: 0,
      minWidth: 300,
    },
    {
      key: 'actions',
      caption: 'Possible Actions',
      render: (item) => <Actions todo={item} />,
      grow: 0,
      shrink: 0,
      minWidth: 200,
    },
  ];

  return (
    <DataTable
      {...view.getListProps()}
      value={value}
      onValueChange={onValueChange}
      columns={columns}
      getRows={view.getVisibleRows}
      headerTextCase="upper"
      size="36"
    />

  );
}
