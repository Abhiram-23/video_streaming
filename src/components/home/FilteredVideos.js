import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Card from "@mui/material/Card";
import {
  Box,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredVideos } from "../../store/videos-slice";
import { useEffect, useState } from "react";
import Home from "./Home";
import Toolbar from "@mui/material/Toolbar";

const FilteredVideos = () => {
  const dispatch = useDispatch();
  const [inputValue, setinputValue] = useState("");
  useEffect(() => {
    dispatch(getFilteredVideos(inputValue));
  }, []);

  const getData = (event) => {
    setinputValue(event.target.value);
    if (event.target.value.length > 3) {
      dispatch(getFilteredVideos(event.target.value));
    } else {
      dispatch(getFilteredVideos(""));
    }
  };
  const { filteredVideos } = useSelector((state) => state.videos);
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Home />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SearchIcon sx={{ cursor: "pointer" }} />
            <TextField
              id="Search"
              label="Search...."
              variant="standard"
              value={inputValue}
              onChange={getData}
              sx={{ marginBottom: "10px", marginLeft: "10px", width: "50vw" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-around",
            }}
          >
            {filteredVideos &&
              filteredVideos.map((eachVideo) => (
                <Card
                  key={eachVideo.id}
                  sx={{
                    maxWidth: 345,
                    width: "300px",
                    marginBottom: "9px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    window.location.pathname = "/video/" + eachVideo.id;
                  }}
                >
                  <CardMedia
                    sx={{ height: 140 }}
                    image={eachVideo.thumbnail_url}
                    title={eachVideo.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="p" component="div">
                      {eachVideo.title}
                    </Typography>
                    <Typography variant="p" component="div">
                      {eachVideo.view_count} Views{"  "}
                      {"  "}
                      {new Date(
                        new Date() - new Date(eachVideo.published_at)
                      ).getFullYear() - 1970}{" "}
                      years ago
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FilteredVideos;
