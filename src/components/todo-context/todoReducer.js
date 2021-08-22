import { ACTIONS_TYPES as ACTIONS, FILTERS } from '../consts/consts';

export const initialState = {
  todos: [
    {
      title: 'Cook the breakfast', done: true, id: 1, isEdited: false,
    },
    {
      title: 'Wash the dishes', done: false, id: 2, isEdited: false,
    },
    {
      title: 'Write some code', done: false, id: 3, isEdited: false,
    },
  ],
  selectedTab: FILTERS.TODO,
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.CHECK_UNCHECK:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
      };
    case ACTIONS.ADD:
      return {
        ...state,
        todos: [...state.todos, { title: action.payload, done: false, id: new Date().toISOString() }],
      };
    case ACTIONS.EDIT_BUTTON_CLICKED:
      if (state.todos.find((todo) => todo.isEdited)) return state;
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, isEdited: !todo.isEdited } : todo)),
      };
    case ACTIONS.UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.isEdited ? { ...todo, title: action.payload, isEdited: !todo.isEdited } : todo)),
      };
    case ACTIONS.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case ACTIONS.FILTER:
      return {
        ...state,
        selectedTab: action.payload,
      };
    default:
      return state;
  }
};
