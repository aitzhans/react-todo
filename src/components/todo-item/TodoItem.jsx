import React, { useContext, useMemo, useCallback } from 'react';
import { Checkbox, FlexRow, Button } from '@epam/loveship';

import { TodoListContext } from '../todo-context/todoContext';
// import Actions from '../action-buttons/ActionsButtons';
import styles from './todoitem.module.css';
import { ACTIONS_TYPES } from '../consts/consts';

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoListContext);
  const stableDispatch = useCallback(dispatch, [dispatch]);
  const { title, done, id } = todo;

  return useMemo(() => (
    <FlexRow vPadding="12" spacing="12" borderBottom>
      <Checkbox
        cx={styles.checkbox}
        size="18"
        label={title}
        value={done}
        onValueChange={() => stableDispatch({ type: ACTIONS_TYPES.CHECK_UNCHECK, payload: id })}
      />
      <FlexRow vPadding="12" spacing="12">
        <Button
          fill="light"
          caption="edit"
          color="sky"
          onClick={() => stableDispatch({ type: ACTIONS_TYPES.EDIT_BUTTON_CLICKED, payload: id })}
        />
        <Button
          fill="light"
          caption="delete"
          color="fire"
          onClick={() => stableDispatch({ type: ACTIONS_TYPES.DELETE, payload: id })}
        />
      </FlexRow>
    </FlexRow>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [todo]);
}
