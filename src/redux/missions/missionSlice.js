import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

export const MissionsData = createAsyncThunk('Missions/MissionData', async () => {
  const request = await axios.get(missionsURL);
  return request.data;
});

const initialState = {
  Missions: [],
  loading: false,
  error: '',
};

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newMission = state.Missions.map((mission) => {
        if (action.payload !== mission.mission_id) {
          return mission;
        }
        return {
          ...mission,
          joined: true,
        };
      });
      return {
        ...state,
        Missions: newMission,
      };
    },

    leaveMission: (state, action) => {
      const newMission = state.Missions.map((mission) => {
        if (action.payload !== mission.mission_id) {
          return mission;
        }
        return {
          ...mission,
          joined: false,
        };
      });
      return {
        ...state,
        Missions: newMission,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(MissionsData.pending, (state) => ({
      ...state,
      loading: true,
    }));

    builder.addCase(MissionsData.fulfilled, (state, action) => ({
      ...state,
      loading: false,
      Missions: action.payload,
    }));

    builder.addCase(MissionsData.rejected, (state, action) => ({
      ...state,
      loading: false,
      error: action.error.message,
    }));
  },
});

export default missionSlice.reducer;
export const { joinMission, leaveMission } = missionSlice.actions;
