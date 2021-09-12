import { createSlice } from '@reduxjs/toolkit';

// import { ACTIONS_TYPES as ACTIONS } from '../consts/consts';

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

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const id = new Date().toISOString();
      state.push({
        title: action.payload, id, done: false, isEdited: false
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todoEntity) => todoEntity.id === action.payload);
      todo.done = !todo.done;
    },
    todoDeleted(state, action) {
      const index = state.indexOf((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
    editButtonClicked(state, action) {
      const todo = state.find((todoEntity) => todoEntity.id === action.payload);
      todo.isEdited = true;
    },
    todoUpdated(state, action) {
      const editedTodo = state.find((todo) => todo.isEdited);
      editedTodo.title = action.payload;
      editedTodo.isEdited = false;
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
