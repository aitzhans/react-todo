import React, { useContext } from 'react';
import { FlexRow } from '@epam/loveship';

import ActionButton from './ActionButton';
import { TodoListContext } from '../todo-context/TodoContext';

export default function Actions({ todo }) {
  const { deleteTodo, editTodo } = useContext(TodoListContext);

  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton label="edit" color="sky" handleClick={() => editTodo(todo)} />
      <ActionButton label="delete" color="fire" handleClick={() => deleteTodo(todo)} />
    </FlexRow>

  );
}
