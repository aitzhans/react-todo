import todosReducer from './reducerSlices/todosSlice';
import filtersReducer from './reducerSlices/filtersSlice';

export default function rootReducer(state = {}, action) {
  return {
    todos: todosReducer(state.todos, action),
    selectedTab: filtersReducer(state.selectedTab, action),
  };
}
