import React, {
  useState,
  useEffect,
  useRef,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  FlexRow,
  FlexCell,
  TextInput,
  Button,
} from '@epam/loveship';

import {
  todoAdded,
  todoUpdated,
  selectEditedTodo
} from '../../reducerSlices/todosSlice';

export default function TodoAddForm() {
  const editedTodo = useSelector(selectEditedTodo);

  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (editedTodo) {
      inputRef.current.focus();
      setInputValue(editedTodo.title);
    }
  }, [editedTodo]);

  const addTodoClicked = () => {
    dispatch(todoAdded(inputValue));
    setInputValue('');
  };

  const updateTodoClicked = () => {
    dispatch(todoUpdated({ id: editedTodo.id, newTitle: inputValue }));
    setInputValue('');
  };

  return (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput
          ref={inputRef}
          value={inputValue}
          onValueChange={(e) => setInputValue(e)}
          placeholder="What are you going to do?"
        />
      </FlexCell>
      {
        editedTodo
          ? (
            <Button
              color="sky"
              caption="Update todo"
              onClick={updateTodoClicked}
              isDisabled={inputValue === ''}
            />
          )
          : (
            <Button
              color="grass"
              caption="Add todo"
              onClick={addTodoClicked}
              isDisabled={inputValue === ''}
            />
          )
      }

    </FlexRow>
  );
}
