import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = `${process.env.REACT_APP_SERVER_URL}message`;

export const getMessages = (id) => axios.get(url + id, tokenRefreshConfig());
export const sendMessage = (data) =>
  axios.post(url, data, tokenRefreshConfig());
