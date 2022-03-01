import axios from "axios";

import { tokenRefreshConfig } from "../config/token";

const url = "https://obscure-sierra-17613.herokuapp.com/comment/";
const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const addCommentRequest = (data) => axios.post(url, data, config);
export const addCommentReplyRequest = (data) =>
  axios.post(url + "reply", data, config);

export const getCommentRequest = (id) => axios.get(url + id, config);
export const getCommentAuthorRequest = (id) =>
  axios.get(url + "user" + id, config);
