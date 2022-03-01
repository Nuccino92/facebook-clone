import axios from "axios";

const url = "https://obscure-sierra-17613.herokuapp.com/auth";

export const authRequest = (data) => axios.get(url, data);
