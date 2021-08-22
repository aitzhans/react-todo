import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import {
  FlexRow,
  FlexCell,
  TextInput,
  Button,
} from '@epam/loveship';

import { TodoListContext } from '../todo-context/todoContext';
import { ACTIONS_TYPES } from '../consts/consts';

export default function TodoAddForm() {
  const { dispatch, editedTodo } = useContext(TodoListContext);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (editedTodo) {
      inputRef.current.focus();
      setInputValue(editedTodo.title);
    }
  }, [editedTodo]);

  const addTodo = () => {
    dispatch({ type: ACTIONS_TYPES.ADD, payload: inputValue });
    setInputValue('');
  };

  const updateTodo = () => {
    dispatch({ type: ACTIONS_TYPES.UPDATE, payload: inputValue });
    setInputValue('');
  };

  return useMemo(() => (
    <FlexRow width="auto" vPadding="24">
      <FlexCell minWidth="300" width="auto">
        <TextInput ref={inputRef} value={inputValue} onValueChange={(e) => setInputValue(e)} placeholder="What are you going to do?" />
      </FlexCell>
      {
        editedTodo
          ? <Button color="sky" caption="Update todo" onClick={updateTodo} isDisabled={inputValue === ''} />
          : <Button color="grass" caption="Add todo" onClick={addTodo} isDisabled={inputValue === ''} />
      }

    </FlexRow>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [inputValue, editedTodo]);
}
