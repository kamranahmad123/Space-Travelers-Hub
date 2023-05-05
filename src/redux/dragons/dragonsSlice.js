import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v4/dragons';

export const getDragonData = createAsyncThunk('dragons/get', async () => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
});

const initialState = {
  dragons: [],
  reservedDragons: [],
  loading: false,
  error: '',
}


export const dragonsSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    /*reserveD(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon};
        }
        return { ...dragon, reserved: true };
      });
    },*/
    reserveD: (state, action) => {
      const reservedDrag = state.dragons.find(
        (dragon) => dragon.dragon.id === action.payload,
      );
      return {
        ...state,
        reservedDragons: [...state.reservedDragons, reservedDrag],
      };
    },
    /*cancelD(state, action) {
      return state.map((dragon) => {
        if (dragon.id !== action.payload) {
          return { ...dragon };
        }
        return { ...dragon, reserved: false };
      });
    },*/
    leaveMission: (state, action) => ({
      ...state,
      reservedDragons: state.reservedDragons.filter(
        (dragon) => dragon.dragon.id !== action.payload,
      ),
    }),
  },
  extraReducers(builder) {
    builder.addCase(getDragonData.fulfilled, (state, action) => {
      state.dragons = action.payload
      return state;
    }); 
  },
});

export const { cancelD, reserveD } = dragonsSlice.actions;

export default dragonsSlice.reducer;
