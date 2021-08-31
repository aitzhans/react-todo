import { FILTERS, ACTIONS_TYPES as ACTIONS } from '../consts/consts';

const initialState = {
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
  editedTodo: null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          { title: action.payload.title, done: false, id: action.payload.id },
        ],
      };

    case ACTIONS.CHECK_UNCHECK:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, done: !todo.done } : todo)),
      };

    case ACTIONS.DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case ACTIONS.EDIT_BUTTON_CLICKED:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.id === action.payload ? { ...todo, isEdited: true } : todo)),
        editedTodo: state.todos.find((todo) => todo.id === action.payload),
      };

    case ACTIONS.UPDATE:
      return {
        ...state,
        todos: state.todos.map((todo) => (todo.isEdited ? { ...todo, title: action.payload, isEdited: false } : todo)),
        editedTodo: null,
      };

    case ACTIONS.FILTER:
      return {
        ...state,
        selectedTab: action.payload,
      };

    default:
      return state;
  }
}
