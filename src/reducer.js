import { combineReducers } from 'redux';

import todosReducer from './reducerSlices/todosSlice';
import filtersReducer from './reducerSlices/filtersSlice';

const rootReducer = combineReducers({
  todos: todosReducer,
  selectedTab: filtersReducer,
});

export default rootReducer;
