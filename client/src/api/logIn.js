import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}log-in`;

export const logInRequest = (userData) => axios.post(url, userData);
