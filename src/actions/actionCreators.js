import { ACTIONS_TYPES as ACTIONS } from '../consts/consts';

export const checkUncheck = (payload) => ({
  type: ACTIONS.CHECK_UNCHECK,
  payload,
});

export const addTodo = (payload) => ({
  type: ACTIONS.ADD,
  payload,
});

export const editButtonClicked = (payload) => ({
  type: ACTIONS.EDIT_BUTTON_CLICKED,
  payload,
});

export const updateTodo = (payload) => ({
  type: ACTIONS.UPDATE,
  payload,
});

export const deleteTodo = (payload) => ({
  type: ACTIONS.DELETE,
  payload,
});

export const filterTodos = (payload) => ({
  type: ACTIONS.FILTER,
  payload,
});
