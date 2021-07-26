import React from 'react';
import { Checkbox, FlexRow } from '@epam/loveship';
import { useDispatch } from 'react-redux';

import { checkUncheck } from '../../actionCreators';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { title, done } = todo;

  const handleCheckbox = () => {
    dispatch(checkUncheck(todo));
  };

  return (
    <FlexRow vPadding="12" spacing="12">
      <Checkbox size="18" label={title} value={done} onValueChange={handleCheckbox} />
    </FlexRow>
  );
}
