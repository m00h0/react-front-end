import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingReducer,
  },
});

export default store;
