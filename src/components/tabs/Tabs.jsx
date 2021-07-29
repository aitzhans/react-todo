import React, { useContext, useMemo } from 'react';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';

import { FILTERS } from '../consts/consts';
import { TodoListContext } from '../todo-context/todoContext';

export default function Tabs() {
  const { selectedTab, setSelectedTab, todos } = useContext(TodoListContext);
  const allTodosCount = todos.length;
  const notCompletedTodosCount = todos.filter((todo) => !todo.done).length;
  const completedTodosCount = allTodosCount - notCompletedTodosCount;

  return useMemo(() => (
    <FlexCell grow={1}>
      <FlexRow borderBottom="gray40" background="none">
        <TabButton
          caption="All"
          isLinkActive={selectedTab === FILTERS.ALL}
          onClick={() => setSelectedTab(FILTERS.ALL)}
          count={allTodosCount}
          size="36"
        />
        <TabButton
          caption="To do"
          isLinkActive={selectedTab === FILTERS.TODO}
          onClick={() => setSelectedTab(FILTERS.TODO)}
          count={notCompletedTodosCount}
          size="36"
        />
        <TabButton
          caption="Done"
          isLinkActive={selectedTab === FILTERS.DONE}
          onClick={() => setSelectedTab(FILTERS.DONE)}
          count={completedTodosCount}
          size="36"
        />
      </FlexRow>
    </FlexCell>
  ), [selectedTab, todos]);
}
