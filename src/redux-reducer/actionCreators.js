import * as actions from './actions';

export const addTodo = (title) => ({
  type: actions.ADD_TODO,
  payload: title
});

export const deleteTodo = (todo) => ({
  type: actions.DELETE_TODO,
  payload: todo
});

export const editTodo = (todo) => ({
  type: actions.EDIT_TODO,
  payload: todo
});

export const updateTodo = (title) => ({
  type: actions.UPDATE_TODO,
  payload: title
});

export const filterTodos = (filter) => ({
  type: actions.FILTER_TODOS,
  payload: filter
});

export const checkUncheck = (todo) => ({
  type: actions.CHECK_UNCHECK,
  payload: todo
});
