import React, { useContext } from 'react';
import { Checkbox, FlexRow } from '@epam/loveship';

import { TodoListContext } from '../todo-context/TodoContext';

export default function TodoItem({ todo }) {
  const { checkUncheck } = useContext(TodoListContext);
  const { title, done } = todo;

  const handleCheckbox = () => {
    checkUncheck(todo);
  };

  return (
    <FlexRow vPadding="12" spacing="12">
      <Checkbox size="18" label={title} value={done} onValueChange={handleCheckbox} />
    </FlexRow>
  );
}
