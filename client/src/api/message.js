import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/message/";

const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const getMessages = (id) => axios.get(url + id, config);
export const sendMessage = (data) => axios.post(url, data, config);
