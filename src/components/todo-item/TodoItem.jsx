import React from 'react';
import { useDispatch } from 'react-redux';
import { Checkbox, FlexRow, Button } from '@epam/loveship';

import styles from './todoitem.module.css';
import { checkUncheck, editButtonClicked, deleteTodo } from '../../actions/actionCreators';

export default function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const { title, done, id } = todo;

  return (
    <FlexRow vPadding="12" spacing="12" borderBottom>
      <Checkbox
        cx={styles.checkbox}
        size="18"
        label={title}
        value={done}
        onValueChange={() => dispatch(checkUncheck(id))}
      />
      <FlexRow vPadding="12" spacing="12">
        <Button
          fill="light"
          caption="edit"
          color="sky"
          onClick={() => dispatch(editButtonClicked(id))}
        />
        <Button
          fill="light"
          caption="delete"
          color="fire"
          onClick={() => dispatch(deleteTodo(id))}
        />
      </FlexRow>
    </FlexRow>
  );
}
