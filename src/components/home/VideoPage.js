import React, { useEffect, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Box, Typography } from "@mui/material";
import Home from "./Home";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoById,
  removeSavedVideos,
  setSavedVideos,
} from "../../store/videos-slice";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import StepConnector from "@mui/material/StepConnector";
import LibraryAddOutlinedIcon from "@mui/icons-material/LibraryAddOutlined";
import LibraryAddCheckOutlinedIcon from "@mui/icons-material/LibraryAddCheckOutlined";
const VideoPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(window.location.pathname.split("/")[2]));
  }, []);
  const [like, setLike] = useState("Like");
  const [disLike, setDisLike] = useState("DisLike");
  const [save, setSave] = useState("Save");
  const { videoById, savedVideos } = useSelector((state) => state.videos);
  let a = videoById.video_url;
  let b = a && a.split("?");
  let c = b && b[1].split("=")[1];
  const videoUrl = b && b[0].replace("watch", "embed") + "/" + c;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Home />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <iframe
                width="900px"
                height="400px"
                src={videoUrl}
                title={videoById?.title}
              ></iframe>
              <Typography
                component="div"
                variant="h6"
                sx={{
                  overflowWrap: "break-word",
                  fontWeight: "600",
                  marginTop: "2px",
                }}
              >
                {videoById.title}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <Typography sx={{ color: "gray" }} variant="p" component="div">
                  {videoById.view_count} Views{"  "}
                  {" . "}
                  {new Date(
                    new Date() - new Date(videoById.published_at)
                  ).getFullYear() - 1970}{" "}
                  years ago
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    textIndent: "15px",
                  }}
                >
                  {like}
                  {like === "Like" ? (
                    <ThumbUpOffAltIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => {
                        setLike("Liked");
                        setDisLike("DisLike");
                      }}
                    />
                  ) : (
                    <ThumbUpAltIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => setLike("Like")}
                    />
                  )}
                  {disLike}
                  {disLike === "DisLike" ? (
                    <ThumbDownOffAltIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => {
                        setDisLike("DisLiked");
                        setLike("Like");
                      }}
                    />
                  ) : (
                    <ThumbDownAltIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => setDisLike("DisLike")}
                    />
                  )}
                  {save}
                  {save === "Save" ? (
                    <LibraryAddOutlinedIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => {
                        dispatch(setSavedVideos(videoById));
                        setSave("Saved");
                      }}
                    />
                  ) : (
                    <LibraryAddCheckOutlinedIcon
                      sx={{ cursor: "pointer", paddingLeft: "2px" }}
                      onClick={() => {
                        dispatch(removeSavedVideos(videoById?.id));

                        setSave("Save");
                      }}
                    />
                  )}
                </Typography>
              </Box>
              <StepConnector />
              <Box sx={{ display: "flex" }}>
                <img
                  src={videoById?.channel?.profile_image_url}
                  alt={videoById?.channel?.name}
                  width="40px"
                  height="40px"
                  sx={{ borderRadius: "25px" }}
                />
                <Box sx={{ paddingLeft: "15px" }}>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      marginTop: "2px",
                    }}
                  >
                    {videoById?.channel?.name}
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      fontSize: "12px",
                      marginTop: "2px",
                      color: "gray",
                    }}
                  >
                    {videoById?.channel?.subscriber_count} Subscribers
                  </Typography>
                  <Typography
                    component="div"
                    variant="p"
                    sx={{
                      marginTop: "12px",
                      fontWeight: 600,
                    }}
                  >
                    {videoById?.description}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default VideoPage;
