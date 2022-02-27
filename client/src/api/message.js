import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "http://localhost:8000/message/";

const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const getMessages = (id) => axios.get(url + id, config);
export const sendMessage = (data) => axios.post(url, data, config);
