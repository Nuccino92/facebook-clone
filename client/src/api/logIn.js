import axios from "axios";

const url = "https://obscure-sierra-17613.herokuapp.com/log-in";

export const logInRequest = (userData) => axios.post(url, userData);
