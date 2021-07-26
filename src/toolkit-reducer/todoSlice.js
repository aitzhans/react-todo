import { createSlice } from '@reduxjs/toolkit';

import FILTERS from '../components/consts/consts';

const initialState = {
  todos: [
    { title: 'Cook the breakfast', done: true, id: 1 },
    { title: 'Wash the dishes', done: false, id: 2 },
    { title: 'Write some code', done: false, id: 3 },
  ],
  filteredTodos: [],
  todosCount: 0,
  editedValue: null
};

export const todoSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = { title: action.payload, done: false, id: new Date().getUTCMilliseconds() };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      state.editedValue = action.payload;
    },
    checkUncheck: (state, action) => {
      state.todos = [...state.todos.map((el) => (el.id === action.payload.id ? { ...el, done: !el.done } : el))];
    },
    updateTodo: (state, action) => {
      const updatedTodo = {
        ...state.editedValue,
        title: action.payload
      };
      state.todos = [...state.todos.map((el) => (el.id === state.editedValue.id ? updatedTodo : el))];
      state.editedValue = null;
    },
    filterTodos: (state, action) => {
      state.todosCount = state.todos.filter((item) => !item.done).length;
      switch (action.payload) {
        case FILTERS.ALL:
          state.filteredTodos = [...state.todos];
          break;
        case FILTERS.TODO:
          state.filteredTodos = [...state.todos.filter((item) => !item.done)];
          break;
        case FILTERS.DONE:
          state.filteredTodos = [...state.todos.filter((item) => item.done)];
          break;
        default:
          break;
      }
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  editTodo,
  updateTodo,
  checkUncheck,
  filterTodos,
} = todoSlice.actions;

export default todoSlice.reducer;
