import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v4/dragons';

export const getDragonData = createAsyncThunk('dragons/getDragonData', async () => {
  const resp = await axios.get(url);
  return resp.data;
});

const initialState = {
  dragon: [],
  loading: 'idle',
  error: null,
};

const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,

  reducers: {
    reserveD: (state, action) => {
      const newDragon = state.dragon.map((dragon) => {
        if (action.payload !== dragon.id) {
          return dragon;
        }
        return {
          ...dragon,
          reserved: true,
        };
      });
      return {
        ...state,
        dragon: newDragon,
      };
    },
    cancelD: (state, action) => {
      const newDragon = state.dragon.map((dragon) => {
        if (action.payload !== dragon.id) {
          return dragon;
        }
        return {
          ...dragon,
          reserved: false,
        };
      });
      return {
        ...state,
        dragon: newDragon,
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getDragonData.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(getDragonData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      reserved: false,
      dragon: action.payload,
    }));

    builder.addCase(getDragonData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export const { reserveD, cancelD } = dragonsSlice.actions;

export default dragonsSlice.reducer;
