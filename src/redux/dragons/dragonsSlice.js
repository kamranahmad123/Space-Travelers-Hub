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
  extraReducers: (builder) => {
    builder.addCase(getDragonData.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(getDragonData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      dragons: action.payload,
    }));

    builder.addCase(getDragonData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default dragonsSlice.reducer;
