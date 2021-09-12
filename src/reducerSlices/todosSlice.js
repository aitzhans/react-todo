import { ACTIONS_TYPES as ACTIONS } from '../consts/consts';

const initialState = [
  {
    title: 'Cook the breakfast', done: true, id: 1, isEdited: false,
  },
  {
    title: 'Wash the dishes', done: false, id: 2, isEdited: false,
  },
  {
    title: 'Write some code', done: false, id: 3, isEdited: false,
  },
];

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return [
        ...state,
        { title: action.payload.title, done: false, id: action.payload.id },
      ];

    case ACTIONS.CHECK_UNCHECK:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo));

    case ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case ACTIONS.EDIT_BUTTON_CLICKED:
      return state.map((todo) => (todo.id === action.payload ? { ...todo, isEdited: true } : todo));

    case ACTIONS.UPDATE:
      return state.map((todo) => (todo.isEdited ? { ...todo, title: action.payload, isEdited: false } : todo));

    default:
      return state;
  }
}
