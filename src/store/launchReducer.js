import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from "./api";

const initialState = {
    allLaunches: [],
    launchesLoading: false
};

const launch = createSlice({
  name: 'launch',
  initialState,

  reducers: {
     launchesRequested: (state, action) => {
      state.launchesLoading = true;
    },
    launchesRequestedFailed: (state, action) => {
      state.launchesLoading = false;
    },
    launchesReceived: (state, action) => {
      state.allLaunches = action.payload;
      state.launchesLoading = false;
    }
  },
})

export const{
    launchesRequested,
    launchesReceived,
    launchesRequestedFailed
}=launch.actions;

export default launch.reducer;

// Load Launches

export const loadLaunches = () =>
  apiCallBegan({
    url: "/launches",
    onStart: launchesRequested.type,
    onSuccess: launchesReceived.type,
    onFailed: launchesRequestedFailed.type,
  });

