import axios from "axios";

const url = "https://lit-spire-63005.herokuapp.com/log-in";

export const logInRequest = (userData) => axios.post(url, userData);
