import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./login-store";
import videosSlice from "./videos-store";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
    videos: videosSlice.reducer,
  },
});
