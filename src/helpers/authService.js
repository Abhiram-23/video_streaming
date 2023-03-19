export const authService = {
  login,
  logout,
  isAuthenticated,
  setAccessToken,
  setRefreshToken,
  setUserDetails,
  savedVideos,
};

function isAuthenticated() {
  return localStorage.getItem("acesstoken");
}
function setUserDetails(details) {
  localStorage.setItem("userdata", details);
}
function setAccessToken(token) {
  localStorage.setItem("acesstoken", token);
}

function setRefreshToken(token) {
  localStorage.setItem("refreshtoken", token);
}

function login() {
  window.location = "http://localhost:3000";
}

function logout() {
  localStorage.clear();
  window.location.replace("http://localhost:3000/login");
}

function savedVideos(videos) {
  localStorage.setItem("savedVideos", videos);
}
