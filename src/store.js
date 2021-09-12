import { configureStore } from '@reduxjs/toolkit';

import todosReducer from './reducerSlices/todosSlice';
import filtersReducer from './reducerSlices/filtersSlice';

const store = configureStore({
  reducer: {
    todos: todosReducer,
    selectedTab: filtersReducer,
  }
});

export default store;
