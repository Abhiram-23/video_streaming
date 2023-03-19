import React from "react";
import Card from "@mui/material/Card";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import Toolbar from "@mui/material/Toolbar";

const SavedVideos = () => {
  const { savedVideos } = useSelector((state) => state.videos);
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
            {savedVideos.length ? (
              savedVideos.map((eachVideo, index) => (
                <Card
                  sx={{ display: "flex", margin: "5px", cursor: "pointer" }}
                  key={index}
                  onClick={() => {
                    window.location.pathname = "/video/" + eachVideo.id;
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      width: "80vw",
                      flexDirection: "row",
                      margin: "10px",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{ width: 350, height: 200 }}
                      image={eachVideo.thumbnail_url}
                      alt={eachVideo.title}
                    />
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                        component="div"
                        // variant="h5"
                        sx={{ overflowWrap: "break-word" }}
                      >
                        {eachVideo.title}
                      </Typography>
                      <Typography component="div" variant="p">
                        {eachVideo.channel.name}
                      </Typography>
                      <Typography
                        sx={{ color: "gray" }}
                        variant="p"
                        component="div"
                      >
                        {eachVideo.view_count} Views{"  "}
                        {" . "}
                        {new Date(
                          new Date() - new Date(eachVideo.published_at)
                        ).getFullYear() - 1970}{" "}
                        years ago
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        pl: 1,
                        pb: 1,
                      }}
                    ></Box>
                  </Box>
                </Card>
              ))
            ) : (
              <Typography sx={{ color: "gray" }} variant="p" component="div">
                NO Videos Saved
              </Typography>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SavedVideos;
