import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://facebook-clone-production.up.railway.app/message/";

export const getMessages = (id) => axios.get(url + id, tokenRefreshConfig());
export const sendMessage = (data) =>
  axios.post(url, data, tokenRefreshConfig());
