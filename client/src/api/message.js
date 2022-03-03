import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/message/";

export const getMessages = (id) => axios.get(url + id, tokenRefreshConfig());
export const sendMessage = (data) =>
  axios.post(url, data, tokenRefreshConfig());
