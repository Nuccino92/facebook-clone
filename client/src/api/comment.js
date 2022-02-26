import axios from "axios";

import { tokenRefreshConfig } from "../config/token";

const url = "http://localhost:8000/comment/";
const token = localStorage.getItem("token");

export const addCommentRequest = (data) =>
  axios.post(url, data, tokenRefreshConfig(token));
export const addCommentReplyRequest = (data) =>
  axios.post(url + "reply", data, tokenRefreshConfig(token));

export const getCommentRequest = (id) =>
  axios.get(url + id, tokenRefreshConfig(token));
export const getCommentAuthorRequest = (id) =>
  axios.get(url + "user" + id, tokenRefreshConfig(token));
