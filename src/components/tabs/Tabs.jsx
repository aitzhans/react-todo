import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TabButton, FlexRow, FlexCell } from '@epam/loveship';

import { FILTERS } from '../../consts/consts';
import { tabChanged } from '../../reducerSlices/filtersSlice';

export default function Tabs() {
  const { filters, todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { selectedTab } = filters;
  const allTodosCount = Object.keys(todos).length;
  const notCompletedTodosCount = Object.keys(todos).filter((key) => !todos[key].done).length;
  const completedTodosCount = allTodosCount - notCompletedTodosCount;

  const handleTabClick = (clickedTab) => {
    if (selectedTab !== clickedTab) {
      dispatch(tabChanged(clickedTab));
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
