import axios from "axios";

const url = "https://obscure-sierra-17613.herokuapp.com/register";

export const createUserRequest = (userData) => axios.post(url, userData);
