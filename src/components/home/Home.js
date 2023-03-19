import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import icon from "../../assets/logo.png";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import { authService } from "../../helpers/authService";

const drawerWidth = 240;

export default function Home() {
  const changePage = (val) => {
    if (val === "Home") {
      window.location.pathname = "/home/filteredVideos";
    } else if (val === "Trending") {
      window.location.pathname = "/home/trendingVideos";
    } else if (val === "Gaming") {
      window.location.pathname = "/home/gamingVideos";
    } else if (val === "Saved Videos") {
      window.location.pathname = "/home/savedVideos";
    }
  };
  return (
    <Box>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#FF794D",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              margin: "5px",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" noWrap component="div">
              <img src={icon} alt="Valuebound" width="200px" height="50px" />
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ cursor: "pointer" }}
              onClick={() => authService.logout()}
            >
              Logout
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Home", "Trending", "Gaming", "Saved Videos"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => changePage(text)}>
                    <ListItemIcon>
                      {index === 0 && <HomeIcon />}
                      {index === 1 && <WhatshotIcon />}
                      {index === 2 && <SportsEsportsIcon />}
                      {index === 3 && <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
