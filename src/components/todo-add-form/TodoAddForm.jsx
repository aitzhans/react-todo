import React, {
  useState, useContext, useEffect, useMemo, useRef
} from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';

import { TodoListContext } from '../todo-context/todoContext';
import { ACTIONS_TYPES } from '../consts/consts';

export default function TodoAddForm() {
  const { dispatch, editedTodo } = useContext(TodoListContext);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (editedTodo) {
      inputRef.current.focus();
      setValue(editedTodo.title);
    }
  }, [editedTodo]);

  const handleSubmit = () => {
    if (!editedTodo) {
      dispatch({ type: ACTIONS_TYPES.ADD, payload: value });
    } else {
      dispatch({ type: ACTIONS_TYPES.UPDATE, payload: value });
    }
    setValue('');
  };

  return useMemo(() => (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput ref={inputRef} value={value} onValueChange={(e) => setValue(e)} placeholder="What are you going to do?" />
      </FlexCell>
      {
        editedTodo
          ? <Button color="sky" caption="Update todo" onClick={handleSubmit} isDisabled={value === ''} />
          : <Button color="grass" caption="Add todo" onClick={handleSubmit} isDisabled={value === ''} />
      }

    </FlexRow>
  ), [value, editedTodo]);
}
