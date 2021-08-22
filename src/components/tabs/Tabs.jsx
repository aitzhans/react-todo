import React, { useContext, useMemo } from 'react';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';

import { FILTERS, ACTIONS_TYPES } from '../consts/consts';
import { TodoListContext } from '../todo-context/todoContext';

export default function Tabs() {
  const { selectedTab, dispatch, todos } = useContext(TodoListContext);
  const allTodosCount = todos.length;
  const notCompletedTodosCount = todos.filter((todo) => !todo.done).length;
  const completedTodosCount = allTodosCount - notCompletedTodosCount;

  const handleTabClick = (clickedTab) => {
    if (selectedTab !== clickedTab) {
      dispatch({ type: ACTIONS_TYPES.FILTER, payload: clickedTab });
    }
  };

  return useMemo(() => (
    <FlexCell grow={1}>
      <FlexRow borderBottom="gray40" background="none">
        <TabButton
          caption={FILTERS.ALL}
          isLinkActive={selectedTab === FILTERS.ALL}
          onClick={() => handleTabClick(FILTERS.ALL)}
          count={allTodosCount}
          size="36"
        />
        <TabButton
          caption={FILTERS.TODO}
          isLinkActive={selectedTab === FILTERS.TODO}
          onClick={() => handleTabClick(FILTERS.TODO)}
          count={notCompletedTodosCount}
          size="36"
        />
        <TabButton
          caption={FILTERS.DONE}
          isLinkActive={selectedTab === FILTERS.DONE}
          onClick={() => handleTabClick(FILTERS.DONE)}
          count={completedTodosCount}
          size="36"
        />
      </FlexRow>
    </FlexCell>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ), [selectedTab, todos]);
}
