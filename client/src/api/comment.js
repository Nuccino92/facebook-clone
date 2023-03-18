import axios from "axios";

import { tokenRefreshConfig } from "../config/token";

const url = "https://facebook-clone-production.up.railway.app/comment/";

export const addCommentRequest = (data) =>
  axios.post(url, data, tokenRefreshConfig());
export const addCommentReplyRequest = (data) =>
  axios.post(url + "reply", data, tokenRefreshConfig());

export const getCommentRequest = (id) =>
  axios.get(url + id, tokenRefreshConfig());
export const getCommentAuthorRequest = (id) =>
  axios.get(url + "user" + id, tokenRefreshConfig());
