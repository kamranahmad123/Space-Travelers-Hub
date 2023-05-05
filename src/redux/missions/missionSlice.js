// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// const missionsURL = 'https://api.spacexdata.com/v3/missions';

// export const MissionsData = createAsyncThunk('Missions/MissionData', async () => {
//   const request = await axios.get(missionsURL);
//   return request.data;
// });

// const initialState = {
//   Missions: [],
//   joinedMissions: [],
//   loading: false,
//   error: '',
// };

// const missionSlice = createSlice({
//   name: 'Missions',
//   initialState,
//   reducers: {
//     joinMission: (state, action) => {
//       const joinedMission = state.Missions.find(
//         (mission) => mission.mission_id === action.payload,
//       );
//       return {
//         ...state,
//         joinedMissions: [...state.joinedMissions, joinedMission],
//       };
//     },

//     leaveMission: (state, action) => ({
//       ...state,
//       joinedMissions: state.joinedMissions.filter(
//         (mission) => mission.mission_id !== action.payload,
//       ),
//     }),
//   },
//   extraReducers: (builder) => {
//     builder.addCase(MissionsData.pending, (state) => ({
//       ...state,
//       loading: true,
//     }));

//     builder.addCase(MissionsData.fulfilled, (state, action) => ({
//       ...state,
//       loading: false,
//       Missions: action.payload,
//     }));

//     builder.addCase(MissionsData.rejected, (state, action) => ({
//       ...state,
//       loading: false,
//       error: action.error.message,
//     }));
//   },
// });

// export default missionSlice.reducer;
// export const { joinMission, leaveMission } = missionSlice.actions;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const missionsURL = 'https://api.spacexdata.com/v3/missions';

export const MissionsData = createAsyncThunk('Missions/MissionData', async () => {
  const request = await axios.get(missionsURL);
  
  return request.data;
});

const initialState = {
  Missions: [],
  joinedMissions: [],
  loading: false,
  error: '',
};

const missionSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const joinedMission = state.Missions.find(
        (mission) => mission.mission_id === action.payload,
      );
      return {
        ...state,
        joinedMissions: [...state.joinedMissions, joinedMission],
      };
    },

    leaveMission: (state, action) => ({
      ...state,
      joinedMissions: state.joinedMissions.filter(
        (mission) => mission.mission_id !== action.payload,
      ),
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(MissionsData.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(MissionsData.fulfilled, (state, action) => {
      state.loading = false;
      state.Missions = action.payload;
    });

    builder.addCase(MissionsData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default missionSlice.reducer;
export const { joinMission, leaveMission } = missionSlice.actions;
