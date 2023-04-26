import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

const fetchRocketsData = createAsyncThunk('rockets/fetchRocketData', async () => {
  const request = await axios.get(rocketsUrl);
  return request.data;
});

// console.log(fetchRocketsData);

const initialState = {
  Rockets: [],
  loading: false,
  error: '',
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  extraReducers: (builder) => {
    builder.case(fetchRocketsData.pending, (state) => ({
      ...state,
      loading: true,
    }));
    builder.case(fetchRocketsData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      rockets: action.payload,
    }));
    builder.case(fetchRocketsData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default rocketSlice.reducer;
