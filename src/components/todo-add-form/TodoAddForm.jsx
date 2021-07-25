import React, { useState, useContext } from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';

import { TodoListContext } from '../todo-context/TodoContext';

export default function TodoAddForm() {
  const [value, setValue] = useState('');
  const { addTodo } = useContext(TodoListContext);

  const handleSubmit = () => {
    if (value !== '') {
      addTodo(value);
      setValue('');
    }
  };

  const handleChange = (e) => {
    // console.log(e.slice(-1));
    setValue(e);
  };

  return (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput value={value} onValueChange={handleChange} placeholder="Please type text" />
      </FlexCell>
      <Button color="grass" caption="Add Todo" onClick={handleSubmit} />
    </FlexRow>
  );
}
