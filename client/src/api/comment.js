import axios from "axios";

import { tokenRefreshConfig } from "../config/token";

const url = `${process.env.REACT_APP_SERVER_URL}comment/`;

export const addCommentRequest = (data) =>
  axios.post(url, data, tokenRefreshConfig());
export const addCommentReplyRequest = (data) =>
  axios.post(url + "reply", data, tokenRefreshConfig());

export const getCommentRequest = (id) =>
  axios.get(url + id, tokenRefreshConfig());
export const getCommentAuthorRequest = (id) =>
  axios.get(url + "user" + id, tokenRefreshConfig());
