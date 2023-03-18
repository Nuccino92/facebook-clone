import axios from "axios";

const url = "https://facebook-clone-production.up.railway.app/log-in";

export const logInRequest = (userData) => axios.post(url, userData);
