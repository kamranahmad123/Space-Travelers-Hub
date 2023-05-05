
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

export const dragonsSlice = createSlice({
name: 'dragons',
initialState: [],
reducers: {
reserveD(state, action) {
return state.map((dragon) => {
if (dragon.id !== action.payload) {
return { ...dragon };
}
return { ...dragon, reserved: true };
});
},
cancelD(state, action) {
return state.map((dragon) => {
if (dragon.id !== action.payload) {
return { ...dragon };
}
return { ...dragon, reserved: false };
});
},
},
extraReducers(builder) {
builder.addCase(getDragonData.fulfilled, (state, action) => {
const dragons = action.payload;
return dragons;
});
},
});

export const { cancelD, reserveD } = dragonsSlice.actions;

export default dragonsSlice.reducer;