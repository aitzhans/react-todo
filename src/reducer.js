import * as actions from './actions';
import FILTERS from './components/consts/consts';

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

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_TODO:
      const newTodo = { title: action.payload, done: false, id: new Date().getUTCMilliseconds() };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case actions.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter((el) => el.id !== action.payload.id)]
      };
    case actions.EDIT_TODO:
      return {
        ...state,
        editedValue: action.payload
      };
    case actions.UPDATE_TODO:
      const updatedTodo = {
        ...state.editedValue,
        title: action.payload
      };
      return ({
        ...state,
        todos: [...state.todos.map((el) => (el.id === state.editedValue.id ? updatedTodo : el))],
        editedValue: null
      });
    case actions.CHECK_UNCHECK:
      return ({
        ...state,
        todos: [...state.todos.map((el) => (el.id === action.payload.id ? { ...el, done: !el.done } : el))]
      });
    case actions.FILTER_TODOS:
      const todosCount = state.todos.filter((item) => !item.done).length;
      switch (action.payload) {
        case FILTERS.ALL:
          return {
            ...state,
            filteredTodos: [...state.todos],
            todosCount
          };
        case FILTERS.TODO:
          return {
            ...state,
            filteredTodos: [...state.todos.filter((item) => !item.done)],
            todosCount
          };
        case FILTERS.DONE:
          return {
            ...state,
            filteredTodos: [...state.todos.filter((item) => item.done)],
            todosCount
          };
        default:
          return state;
      }
    default:
      return state;
  }
}
