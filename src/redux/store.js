import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    any: dataReducer,
  },
});

export default store;
