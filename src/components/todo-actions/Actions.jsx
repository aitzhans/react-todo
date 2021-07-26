import React from 'react';
import { FlexRow } from '@epam/loveship';
import { useDispatch } from 'react-redux';

import ActionButton from './ActionButton';

import { deleteTodo, editTodo } from '../../toolkit-reducer/todoSlice';

export default function Actions({ todo }) {
  const dispatch = useDispatch();
  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton label="edit" color="sky" handleClick={() => dispatch(editTodo(todo))} />
      <ActionButton label="delete" color="fire" handleClick={() => dispatch(deleteTodo(todo))} />
    </FlexRow>

  );
}
