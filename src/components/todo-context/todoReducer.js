import { ACTIONS_TYPES as ACTIONS } from '../consts/consts';

export const initialState = [
  {
    title: 'Cook the breakfast', done: true, id: 1, isEdited: false
  },
  {
    title: 'Wash the dishes', done: false, id: 2, isEdited: false
  },
  {
    title: 'Write some code', done: false, id: 3, isEdited: false
  },
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHECK_UNCHECK:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));
    case ACTIONS.ADD:
      return [...state, { title: action.payload, done: false, id: new Date().toISOString() }];
    case ACTIONS.EDIT_BUTTON_CLICKED:
      if (state.find((todo) => todo.isEdited)) return state;
      return state.map((todo) => (todo.id === action.payload ? { ...todo, isEdited: !todo.isEdited } : todo));
    case ACTIONS.UPDATE:
      return state.map((todo) => (todo.isEdited ? { ...todo, title: action.payload, isEdited: !todo.isEdited } : todo));
    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};
