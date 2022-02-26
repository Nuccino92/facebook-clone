import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "http://localhost:8000/posts/";
const token = localStorage.getItem("token");

export const addPostRequest = (postData) =>
  axios.post(url, postData, tokenRefreshConfig(token));

export const getUserPostsRequest = (id, posts) =>
  axios.post(url + id, posts, tokenRefreshConfig(token));

export const updatePostLikesRequest = (id, post, user) =>
  axios({
    method: "post",
    url: url + `like/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      post,
      userId: user._id,
    },
  });
