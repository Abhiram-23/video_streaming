import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import Home from "./Home";
import { getGamingVideos } from "../../store/videos-slice";
import { useDispatch, useSelector } from "react-redux";

const GamingVideos = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGamingVideos());
  }, []);

  const { gamingVideos } = useSelector((state) => state.videos);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Home />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {gamingVideos.map((eachVideo) => (
              <Card
                sx={{
                  maxWidth: 345,
                  width: 200,
                  margin: "4px",
                  height: 320,
                }}
                onClick={() => {
                  window.location.pathname = "/video/" + eachVideo.id;
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={eachVideo.thumbnail_url}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {eachVideo.title}
                    </Typography>
                    <Typography variant="p" color="text.secondary">
                      {eachVideo.view_count} Watching Worldwide
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default GamingVideos;
