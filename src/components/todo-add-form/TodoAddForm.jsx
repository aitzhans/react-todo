import React, { useState, useEffect, useRef } from 'react';
import {
  FlexRow, FlexCell, TextInput, Button
} from '@epam/loveship';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, updateTodo } from '../../toolkit-reducer/todoSlice';

export default function TodoAddForm() {
  const editedValue = useSelector((state) => state.editedValue);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const [buttonCaption, setButtonCaption] = useState('Add Todo');
  const inputEl = useRef(null);

  useEffect(() => {
    if (editedValue) {
      setValue(editedValue.title);
      setButtonCaption('Edit Todo');
      inputEl.current.focus();
    } else {
      setValue('');
    }
  }, [editedValue]);

  const handleSubmit = () => {
    if (value !== '') {
      if (editedValue) {
        dispatch(updateTodo(value));
      } else {
        dispatch(addTodo(value));
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
