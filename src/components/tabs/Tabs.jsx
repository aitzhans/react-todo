import React, { useState, useEffect } from 'react';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';
import { useRecoilState, useRecoilValue } from 'recoil';

import FILTERS from '../consts/consts';
import {
  filteredTodosState as filteredTodosAtom,
  todosCount as todosCountAtom,
  todosState as todosAtom
}
  from '../recoil-atoms/atoms';

export default function Tabs() {
  // eslint-disable-next-line no-unused-vars
  const [ filteredTodos, filterTodos ] = useRecoilState(filteredTodosAtom);

  const todos = useRecoilValue(todosAtom);
  const [todosCount, setTodosCount] = useRecoilState(todosCountAtom);

  const [value, onValueChange] = useState('To do');

  const handleTabClick = (filter) => {
    switch (filter) {
      case FILTERS.TODO:
        filterTodos(todos.filter((item) => !item.done));
        break;
      case FILTERS.DONE:
        filterTodos(todos.filter((item) => item.done));
        break;
      default:
        filterTodos(todos);
        break;
    }
    onValueChange(filter);
  };

  useEffect(() => {
    handleTabClick(value);
    setTodosCount(todos.filter((item) => !item.done).length);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <FlexCell grow={1}>
      <FlexRow borderBottom="gray40" background="none">
        <TabButton
          caption="All"
          isLinkActive={value === FILTERS.ALL}
          onClick={() => handleTabClick(FILTERS.ALL)}
          size="36"
        />
        <TabButton
          caption="To do"
          isLinkActive={value === FILTERS.TODO}
          onClick={() => handleTabClick(FILTERS.TODO)}
          count={todosCount}
          size="36"
        />
        <TabButton
          caption="Done"
          isLinkActive={value === FILTERS.DONE}
          onClick={() => handleTabClick(FILTERS.DONE)}
          size="36"
        />
      </FlexRow>
    </FlexCell>
  );
}
