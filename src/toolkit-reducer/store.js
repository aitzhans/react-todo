import { configureStore } from '@reduxjs/toolkit';
import reducer from './todoSlice';

const store = configureStore({
  reducer
});

export default store;
