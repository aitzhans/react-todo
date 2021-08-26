import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';

import { FILTERS } from '../../consts/consts';
import { filterTodos } from '../../actionCreators';

export default function Tabs() {
  const { selectedTab, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const allTodosCount = todos.length;
  const notCompletedTodosCount = todos.filter((todo) => !todo.done).length;
  const completedTodosCount = allTodosCount - notCompletedTodosCount;

  const handleTabClick = (clickedTab) => {
    if (selectedTab !== clickedTab) {
      dispatch(filterTodos(clickedTab));
    }
  };

  return (
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
  );
}
