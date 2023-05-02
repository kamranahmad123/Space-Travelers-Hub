import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    Rocket: rocketReducer,
    dragons: dragonsReducer,
  },
});

export default store;
