import React, {
  useState, useContext, useEffect, useMemo, useRef
} from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';

import { TodoListContext } from '../todo-context/todoContext';

export default function TodoAddForm() {
  const { dispatch, editedTodo } = useContext(TodoListContext);
  // const { addTodo, editedValue, updateTodo } = useContext(TodoListContext);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);
  // console.log(value);
  // const [buttonCaption, setButtonCaption] = useState('Add Todo');

  useEffect(() => {
    if (editedTodo) {
      inputRef.current.focus();
      setValue(editedTodo.title);
    }
  }, [editedTodo]);

  const handleSubmit = () => {
    if (!editedTodo) {
      dispatch({ type: 'add', payload: value });
    } else {
      dispatch({ type: 'update', payload: value });
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
