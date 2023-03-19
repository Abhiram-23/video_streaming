import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import routes from "./routes/index";
// import ProtectedRoute from "./routes/ProtectedRoute";
// import Layout from "./components/layout/Layout";
import "./App.css";
import FilteredVideos from "./components/home/FilteredVideos";
import GamingVideos from "./components/home/GamingVideos";
import Home from "./components/home/Home";
import SavedVideos from "./components/home/SavedVideos";
import TrendingVideos from "./components/home/TrendingVideos";
import VideoPage from "./components/home/VideoPage";
import Login from "./components/login/Login";
import { assignSavedVideo, setSavedVideos } from "./store/videos-slice";

function App() {
  // const location = useLocation();
  const dispatch = useDispatch();
  // const notification = useSelector((state) => state.ui.notification);
  // const loader = useSelector((state) => state.ui.loading);
  // const isAuth = useSelector((state) => state.user.isAuth);
  const isAuth = true;
  useEffect(() => {
    if (localStorage.getItem("savedVideos"))
      dispatch(
        assignSavedVideo(JSON.parse(localStorage.getItem("savedVideos")))
      );
  });
  // useEffect(() => {
  //   if (localStorage.getItem("acesstoken")) dispatch(getUserDetails());
  //   else if (
  //     !location.pathname.match("/login") &&
  //     !location.pathname.match("/forgot-password")
  //   ) {
  //     window.location.replace(REACT_APP_LOGIN_URL);
  //   }
  // }, [dispatch, location]);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/home/filteredVideos"
            element={<FilteredVideos />}
          ></Route>
          <Route
            path="/home/trendingVideos"
            element={<TrendingVideos />}
          ></Route>
          <Route path="/home/gamingVideos" element={<GamingVideos />}></Route>
          <Route path="/video/:id" element={<VideoPage />}></Route>
          <Route path="/home/savedVideos" element={<SavedVideos />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
