import {
  createSlice,
  createEntityAdapter,
  createSelector,
  createAsyncThunk,
} from '@reduxjs/toolkit';

import { FILTERS } from '../consts/consts';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = (await fetch('api/todos')).json();
  return response;
});

export const saveTodo = createAsyncThunk('todos/saveTodo', async (text) => {
  const response = (await fetch('api/todos', {
    method: 'POST',
    body: JSON.stringify(text)
  })).json();
  return response;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
  await fetch(`api/todos/${id}`, { method: 'DELETE' });
  return id;
});

const todosAdapter = createEntityAdapter();

const initialState = todosAdapter.getInitialState({});

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, todosAdapter.setAll)
      .addCase(saveTodo.fulfilled, todosAdapter.addOne)
      .addCase(deleteTodo.fulfilled, todosAdapter.removeOne);
  },
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
