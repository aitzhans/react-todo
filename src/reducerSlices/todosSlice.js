import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  1: {
    title: 'Cook the breakfast', done: true, id: 1, isEdited: false,
  },
  2: {
    title: 'Wash the dishes', done: false, id: 2, isEdited: false,
  },
  3: {
    title: 'Write some code', done: false, id: 3, isEdited: false,
  },
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    todoAdded(state, action) {
      const id = new Date().toISOString();
      state[id] = {
        title: action.payload, id, done: false, isEdited: false
      };
    },
    todoToggled(state, action) {
      state[action.payload].done = !state[action.payload].done;
    },
    todoDeleted(state, action) {
      delete state[action.payload];
    },
    editButtonClicked(state, action) {
      state[action.payload].isEdited = true;
    },
    todoUpdated(state, action) {
      const { editedTitle, editedId } = action.payload;
      state[editedId].title = editedTitle;
      state[editedId].isEdited = false;
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
