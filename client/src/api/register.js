import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}register`;

export const createUserRequest = (userData) => axios.post(url, userData);
