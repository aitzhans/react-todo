import React, { useState, useEffect, useRef } from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';
import { useRecoilState } from 'recoil';

import {
  editedValue as editedValueAtom,
  todosState as todosAtom
} from '../recoil-atoms/atoms';

export default function TodoAddForm() {
  const [editedValue, setEditedValue] = useRecoilState(editedValueAtom);
  const [todos, setTodos] = useRecoilState(todosAtom);

  const [value, setValue] = useState('');
  const [buttonCaption, setButtonCaption] = useState('Add Todo');
  const inputEl = useRef(null);

  useEffect(() => {
    if (editedValue) {
      setValue(editedValue.title);
      inputEl.current.focus();
      setButtonCaption('Edit Todo');
    } else {
      setValue('');
    }
  }, [editedValue]);

  const handleSubmit = () => {
    if (value !== '') {
      if (editedValue) {
        const updatedTodo = {
          ...editedValue,
          title: value
        };
        setTodos(todos.map((el) => (el.id === editedValue.id ? updatedTodo : el)));
        setEditedValue(null);
      } else {
        setTodos([
          ...todos,
          { title: value, done: false, id: new Date().getUTCMilliseconds() }
        ]);
      }
      setValue('');
      setButtonCaption('Add Todo');
    }
  };

  const handleChange = (e) => {
    setValue(e);
  };

  return (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput ref={inputEl} value={value} onValueChange={handleChange} placeholder="What are you going to do?" />
      </FlexCell>
      <Button color="grass" caption={buttonCaption} onClick={handleSubmit} />
    </FlexRow>
  );
}
