import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Checkbox, FlexRow, Button } from '@epam/loveship';

import styles from './todoitem.module.css';
import { todoToggled, todoDeleted, editButtonClicked } from '../../reducerSlices/todosSlice';

const selectTodoById = (state, todoId) => state.todos.find((todo) => todo.id === todoId);

export default function TodoItem({ todoId }) {
  const todo = useSelector((state) => selectTodoById(state, todoId));
  const dispatch = useDispatch();
  const { title, done } = todo;

  return (
    <FlexRow vPadding="12" spacing="12" borderBottom>
      <Checkbox
        cx={styles.checkbox}
        size="18"
        label={title}
        value={done}
        onValueChange={() => dispatch(todoToggled(todoId))}
      />
      <FlexRow vPadding="12" spacing="12">
        <Button
          fill="light"
          caption="edit"
          color="sky"
          onClick={() => dispatch(editButtonClicked(todoId))}
        />
        <Button
          fill="light"
          caption="delete"
          color="fire"
          onClick={() => dispatch(todoDeleted(todoId))}
        />
      </FlexRow>
    </FlexRow>
  );
}
