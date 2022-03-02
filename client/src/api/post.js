import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/posts/";
const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const addPostRequest = (postData) => axios.post(url, postData, config);

export const getUserPostsRequest = (id, posts) =>
  axios.post(url + id, posts, config);

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
