// grabs the token and puts it in the header
export const tokenConfig = (getState) => {
  // grabbing token from userReducer
  const token = getState().userReducer.token;
  const config = {
    headers: {},
  };
  //if token has no headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};

// get token if paged is refreshed
export const tokenRefreshConfig = () => {
  const token = localStorage.getItem("token");
  const config = {
    headers: {},
  };
  //if token has no headers
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
};
