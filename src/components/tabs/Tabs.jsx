import React, { useState, useEffect } from 'react';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';
import { useSelector, useDispatch } from 'react-redux';

import FILTERS from '../consts/consts';
import { filterTodos } from '../../toolkit-reducer/todoSlice';

export default function Tabs() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const todosCount = useSelector((state) => state.todosCount);
  const [value, onValueChange] = useState('To do');

  const handleTabClick = (filter) => {
    dispatch(filterTodos(filter));
    onValueChange(filter);
  };

  useEffect(() => {
    dispatch(filterTodos(value));
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
