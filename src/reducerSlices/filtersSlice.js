import { createSlice } from '@reduxjs/toolkit';

import { FILTERS } from '../consts/consts';

const initialState = {
  selectedTab: FILTERS.TODO
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    tabChanged(state, action) {
      console.log(state);
      state.selectedTab = action.payload;
    }
  }
});

export const { tabChanged } = filtersSlice.actions;

export default filtersSlice.reducer;
