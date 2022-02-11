import axios from "axios";

const url = "http://localhost:8000/log-in";

export const logInRequest = (userData) => axios.post(url, userData);
