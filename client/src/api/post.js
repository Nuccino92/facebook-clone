import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/posts/";

export const addPostRequest = (postData) =>
  axios.post(url, postData, tokenRefreshConfig());

export const getUserPostsRequest = (id, posts) =>
  axios.post(url + id, posts, tokenRefreshConfig());

export const updatePostLikesRequest = (id, post, user) =>
  axios({
    method: "post",
    url: url + `like/${id}`,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      post,
      userId: user._id,
    },
  });
