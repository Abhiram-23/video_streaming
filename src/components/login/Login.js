import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo.png";
import { Checkbox, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { authenticateUser } from "../../store/login-slice";
const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [ischecked, setIsChecked] = useState(false);
  const dispatch = useDispatch();
  const onInputChange = (event) => {
    let val = event.target.value;

    if (event.target.id === "userName") {
      setUserName(val);
    } else {
      setPassword(val);
    }
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Card
          sx={{
            minWidth: 275,
            padding: "15px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <CardContent>
            <img src={logo} alt="valuebound" height={50} width={300} />
            <Typography variant="p" component="div" sx={{ mb: 1 }}>
              Username
            </Typography>
            <TextField
              id="userName"
              label="Username"
              variant="outlined"
              size="small"
              sx={{ mb: 1 }}
              onChange={onInputChange}
            />
            <Typography variant="p" component="div" sx={{ mb: 1 }}>
              Password
            </Typography>
            <TextField
              id="password"
              label="Password"
              size="small"
              variant="outlined"
              type={ischecked ? "text" : "password"}
              sx={{ mb: 1 }}
              onChange={onInputChange}
            />
            <Box
              sx={{
                display: "flex",
                marginTop: "5px",
                alignItems: "center",
              }}
            >
              <Checkbox
                onClick={() => {
                  setIsChecked(!ischecked);
                }}
                checked={ischecked}
              />
              <Typography variant="body2">Show Password</Typography>
            </Box>
          </CardContent>
          <CardActions sx={{ width: "100%" }}>
            <Button
              variant="contained"
              size="small"
              sx={{ width: "100%" }}
              onClick={() => dispatch(authenticateUser(userName, password))}
            >
              Login
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default Login;
