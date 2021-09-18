import {
  createSlice,
  createEntityAdapter,
  createSelector,
  nanoid,
} from '@reduxjs/toolkit';

import { FILTERS } from '../consts/consts';

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({
  ids: [1, 2, 3],
  entities: {
    1: {
      title: 'Cook the breakfast', done: true, id: 1, isEdited: false,
    },
    2: {
      title: 'Wash the dishes', done: false, id: 2, isEdited: false,
    },
    3: {
      title: 'Write some code', done: false, id: 3, isEdited: false,
    },
  }
});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoDeleted: todosAdapter.removeOne,
    todoAdded(state, action) {
      const newTodo = {
        id: nanoid(), title: action.payload, isEdited: false, done: false
      };
      todosAdapter.addOne(state, newTodo);
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.done = !todo.done;
    },
    editButtonClicked(state, action) {
      const todoId = action.payload;
      const todo = state.entities[todoId];
      todo.isEdited = true;
    },
    todoUpdated(state, action) {
      const { id, newTitle } = action.payload;
      const updatedTodo = state.entities[id];
      updatedTodo.title = newTitle;
      updatedTodo.isEdited = false;
    }
  }
});

export const {
  todoAdded,
  todoToggled,
  todoDeleted,
  editButtonClicked,
  todoUpdated
} = todosSlice.actions;

export default todosSlice.reducer;

export const { selectAll: selectTodos, selectById: selectTodoById } = todosAdapter.getSelectors((state) => state.todos);

export const selectTodoIds = createSelector(
  selectTodos,
  (todos) => todos.map((todo) => todo.id)
);

export const selectFilteredTodos = createSelector(
  selectTodos,
  (state) => state.filters.selectedTab,
  (todos, selectedTab) => {
    switch (selectedTab) {
      case FILTERS.TODO:
        return todos.filter((todo) => !todo.done);
      case FILTERS.DONE:
        return todos.filter((todo) => todo.done);
      default:
        return todos;
    }
  }
);

export const selectFilteredTodosIds = createSelector(
  selectFilteredTodos,
  (todos) => todos.map((todo) => todo.id)
);

export const selectEditedTodo = createSelector(
  selectTodos,
  (todos) => todos.find((todo) => todo.isEdited)
);

export const selectTodosCountByFilters = createSelector(
  selectTodos,
  (todos) => {
    const allTodosCount = todos.length;
    const notCompletedTodosCount = todos.filter((todo) => !todo.done).length;
    const completedTodosCount = allTodosCount - notCompletedTodosCount;
    return {
      allTodosCount,
      notCompletedTodosCount,
      completedTodosCount
    };
  }
);
