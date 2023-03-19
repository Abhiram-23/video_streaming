import { createSlice } from "@reduxjs/toolkit";
import { authService } from "../helpers/authService";
const initialState = {
  trendingVideos: [],
  filteredVideos: [],
  gamingVideos: [],
  videoById: {},
  savedVideos: [],
};

const videosSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideoById(state, action) {
      state.videoById = action.payload.video_details;
    },
    setGamingVideos(state, action) {
      state.gamingVideos = action.payload;
    },
    setFitlteredVideos(state, action) {
      state.filteredVideos = action.payload;
    },
    setTredingVideos(state, action) {
      state.trendingVideos = action.payload;
    },
    setSavedVideo(state, action) {
      state.savedVideos.push(action.payload);
      authService.savedVideos(JSON.stringify(state.savedVideos));
    },
    removeSavedVideo(state, action) {
      state.savedVideos = state.savedVideos.filter(
        (video) => video.id !== action.payload
      );
      authService.savedVideos(JSON.stringify(state.savedVideos));
    },
    assignSavedVideo(state, action) {
      state.savedVideos = action.payload;
    },
  },
});

export const videosActions = videosSlice.actions;

export default videosSlice;
