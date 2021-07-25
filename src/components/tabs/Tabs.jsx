import React, { useState, useContext, useEffect } from 'react';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';

import FILTERS from '../consts/consts';
import { TodoListContext } from '../todo-context/TodoContext';

export default function Tabs() {
  const { todos, filterTodos, todosCount } = useContext(TodoListContext);
  const [value, onValueChange] = useState('To do');

  const handleTabClick = (filter) => {
    filterTodos(filter);
    onValueChange(filter);
  };

  useEffect(() => {
    filterTodos(value);
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
