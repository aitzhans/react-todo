import React, { useContext, useMemo, useCallback } from 'react';
import { Checkbox, FlexRow } from '@epam/loveship';

import { TodoListContext } from '../todo-context/todoContext';
import Actions from '../actions/Actions';
import styles from './todoitem.module.css';
import { ACTIONS_TYPES } from '../consts/consts';

export default function TodoItem({ todo }) {
  const { dispatch } = useContext(TodoListContext);
  const stableDispatch = useCallback(dispatch, []);
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
      <Actions id={id} dispatch={stableDispatch} />
    </FlexRow>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [todo]);
}
