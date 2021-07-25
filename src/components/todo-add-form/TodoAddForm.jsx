import React, { useState, useContext, useEffect } from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';

import { TodoListContext } from '../todo-context/TodoContext';

export default function TodoAddForm() {
  const { addTodo, editedValue, updateTodo } = useContext(TodoListContext);
  const [value, setValue] = useState('');
  const [buttonCaption, setButtonCaption] = useState('Add Todo');

  useEffect(() => {
    if (editedValue) {
      setValue(editedValue.title);
      setButtonCaption('Edit Todo');
      // console.log(editedValue);
    } else {
      setValue('');
    }
  }, [editedValue]);

  const handleSubmit = () => {
    if (value !== '') {
      if (editedValue) {
        updateTodo(value);
      } else {
        addTodo(value);
      }
      setValue('');
      setButtonCaption('Add Todo');
    }
  };

  const handleChange = (e) => {
    // console.log(e.slice(-1));
    setValue(e);
  };

  return (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput value={value} onValueChange={handleChange} placeholder="What are you going to do?" />
      </FlexCell>
      <Button color="grass" caption={buttonCaption} onClick={handleSubmit} />
    </FlexRow>
  );
}
