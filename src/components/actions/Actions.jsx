import React from 'react';
import { FlexRow } from '@epam/loveship';
import { useRecoilState } from 'recoil';

import ActionButton from './ActionButton';
import {
  todosState as todosAtom,
  editedValue as editedValueAtom
} from '../recoil-atoms/atoms';

export default function Actions({ todo }) {
  const [todos, setTodos ] = useRecoilState(todosAtom);
  // eslint-disable-next-line no-unused-vars
  const [editedValue, setEditedValue ] = useRecoilState(editedValueAtom);

  const hadleClick = (action) => {
    switch (action) {
      case 'edit':
        setEditedValue(todo);
        break;
      case 'delete':
        setTodos([
          ...todos.filter((el) => el.id !== todo.id)
        ]);
        break;
      default:
        break;
    }
  };

  return (
    <FlexRow vPadding="12" spacing="12">
      <ActionButton label="edit" color="sky" handleClick={() => hadleClick('edit')} />
      <ActionButton label="delete" color="fire" handleClick={() => hadleClick('delete')} />
    </FlexRow>

  );
}
