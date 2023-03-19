import { videosActions } from "./videos-store";
import axios from "../helpers/axiosInstance";

export const getFilteredVideos = (query) => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      const data = await axios.get("/videos/all?search=" + query);
      dispatch(videosActions.setFitlteredVideos(data.data.videos));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const getGamingVideos = () => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      const data = await axios.get("/videos/gaming");
      dispatch(videosActions.setGamingVideos(data.data.videos));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const getVideoById = (id) => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      const data = await axios.get("/videos/" + id);
      dispatch(videosActions.setVideoById(data.data));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const getTrendingVideos = () => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      const data = await axios.get("/videos/trending");
      dispatch(videosActions.setTredingVideos(data.data.videos));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const setSavedVideos = (video) => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      dispatch(videosActions.setSavedVideo(video));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const assignSavedVideo = (video) => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      dispatch(videosActions.assignSavedVideo(video));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};

export const removeSavedVideos = (id) => {
  return async (dispatch) => {
    try {
      //   dispatch(uiActions.toggleLoader());
      dispatch(videosActions.removeSavedVideo(id));
      //   dispatch(
      //     uiActions.showNotification({
      //       status: "success",
      //       message: data.data.message,
      //     })
      //   );
    } catch (error) {
      //   handleError(dispatch, error);
    } finally {
      //   dispatch(uiActions.toggleLoader());
    }
  };
};
