import React from 'react';
import { Checkbox, FlexRow } from '@epam/loveship';
import { useRecoilState } from 'recoil';

import { todosState as todosAtom } from '../recoil-atoms/atoms';

export default function TodoItem({ todo }) {
  const [todos, setTodos] = useRecoilState(todosAtom);

  const { title, done } = todo;

  const handleCheckbox = () => {
    const updatedTodo = {
      ...todo,
      done: !todo.done
    };
    setTodos(todos.map((el) => (el.id === todo.id ? updatedTodo : el)));
  };

  return (
    <FlexRow vPadding="12" spacing="12">
      <Checkbox size="18" label={title} value={done} onValueChange={handleCheckbox} />
    </FlexRow>
  );
}
