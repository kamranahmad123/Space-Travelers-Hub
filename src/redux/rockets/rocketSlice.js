import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

export const RocketsData = createAsyncThunk('Rockets/RocketsData', async () => {
  const request = await axios.get(rocketsUrl);
  return request.data;
});

const initialState = {
  Rockets: [],
  reserveRockets: [],
  loading: false,
  error: '',
};

const rocketSlice = createSlice({
  name: 'Rockets',
  initialState,
  /* Book button */
  reducers: {
    RocketsBooking: (state, action) => {
      const RocketsReserved = state.Rockets.map((items) => {
        if (items.id === action.payload) {
          return {
            ...items,
            reserved: true,

          };
        }
        return items;
      });
      return { ...state, Rockets: RocketsReserved };
      // const RocketsReserved = state.Rockets.find(
      //   (rocket) => rocket.id === action.payload,
      // );
      // return {
      //   ...state,
      //   reserveRockets: [...state.reserveRockets, RocketsReserved],
      // };
    },
    CancelRocket: (state, action) => {
      const RocketsReserved = state.Rockets.map((items) => {
        if (action.payload !== items.id) {
          return items;
        }
        return {
          ...items,
          reserved: false,
        };
      });
      return {
        ...state,
        Rockets: RocketsReserved,
      };
    },
  },
  // Rocket fetch section
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

// Book Button
export const { RocketsBooking, CancelRocket } = rocketSlice.actions;
