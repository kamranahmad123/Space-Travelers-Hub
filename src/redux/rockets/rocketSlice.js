import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
//import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

export const RocketsData = createAsyncThunk('Rockets/RocketsData', async () => {
  //const request = await axios.get(rocketsUrl);
  const request = await fetch(rocketsUrl);
  return request.data;
});

const initialState = {
  Rockets: [],
  loading: false,
  error: '',
};

const rocketSlice = createSlice({
  name: 'Rockets',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(RocketsData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.addCase(RocketsData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      Rockets: action.payload,
    }));
    builder.addCase(RocketsData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default rocketSlice.reducer;
