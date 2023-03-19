import { userActions } from "./login-store";
// import axios from "../helpers/axiosInstance";
import { authService } from "../helpers/authService";

export const authenticateUser = (username, password) => {
  return async (dispatch) => {
    try {
      // dispatch(uiActions.toggleLoader());
      // const data = await axios.post("/login", {
      //   username: username,
      //   password: password,
      // });
      // axios.defaults.headers.Authorization = `Bearer ${data.data.data.tokens.accessToken}`;
      authService.setAccessToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"
      );
      if (username === "abhiram" && password === "valuebound") {
        dispatch(userActions.setUserDetails({ data: { username: "Abhiram" } }));
        window.location.pathname = "/home/filteredVideos";
      } else {
        throw new Error();
      }
      //   localStorage.setItem("roles", JSON.stringify(data.data.data.roles));
      //   axios.defaults.headers.Authorization = `Bearer ${data.data.data.tokens.accessToken}`;
      //   authService.setAccessToken(data.data.data.tokens.accessToken);
      //   authService.setRefreshToken(data.data.data.tokens.refreshToken);
      //   authService.setUserDetails(btoa(JSON.stringify(data.data.data)));
    } catch (error) {
      console.log("Invalid Username");
    }
  };
};

// export const getUserDetails = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(uiActions.toggleLoader());
//       const data = JSON.parse(atob(localStorage.getItem("userdata")));
//       if (data === null) {
//         throw new Error();
//       }
//       dispatch(
//         userActions.setUserDetails({
//           user: data || {},
//         })
//       );
//     } catch (error) {
//       let err = {
//         response: {
//           data: {
//             success: false,
//             code: 444,
//             data: {},
//             message: "jwt expired",
//             error: {
//               name: "TokenExpiredError",
//               message: "jwt expired",
//               expiredAt: "2023-03-04T09:44:35.000Z",
//             },
//           },
//         },
//       };
//       handleError(dispatch, err, getUserDetails);
//     } finally {
//       dispatch(uiActions.toggleLoader());
//     }
//   };
// };

// export const handleError = (dispatch, error, callback) => {
//   let err = "API Server is not working!";
//   if (error.response) {
//     err = error.response.data.message;
//   }
//   if (!error.response || error.response.data.code !== 444) {
//     dispatch(
//       uiActions.showNotification({
//         status: "error",
//         message: err,
//       })
//     );
//   } else if (callback) {
//     refreshToken(dispatch, callback);
//   }
// };

// export const refreshToken = async function (dispatch, callback) {
//   try {
//     dispatch(uiActions.toggleLoader());
//     const data = await axios.post("/renewtoken", {
//       refreshToken: localStorage.getItem("refreshtoken"),
//     });

//     authService.setAccessToken(data.data.data.tokens.accessToken);
//     axios.defaults.headers.Authorization = `Bearer ${data.data.data.tokens.accessToken}`;
//     console.log(
//       JSON.parse(atob(localStorage.getItem("userdata"))),
//       "userdataaaaaaaaaa"
//     );
//     console.log(data.data.data.tokens.accessToken, "accesstoken");
//     dispatch(
//       userActions.setUserDetails({
//         user: data.data.data || {},
//       })
//     );
//     if (callback) {
//       await dispatch(callback([...arguments]));
//     }
//   } catch (error) {
//     handleError(dispatch, error);
//   } finally {
//     dispatch(uiActions.toggleLoader());
//   }
// };

// export const logoutUser = () => {
//   return async (dispatch) => {
//     try {
//       dispatch(uiActions.toggleLoader());
//       const logout = async () => {
//         const response = await axios.get("/logout");
//         return response;
//       };
//       await logout();
//       authService.logout();
//       dispatch(
//         userActions.setUserDetails({
//           user: {},
//         })
//       );
//     } catch (error) {
//       handleError(dispatch, error, authenticateUser);
//     } finally {
//       dispatch(uiActions.toggleLoader());
//     }
//   };
// };
