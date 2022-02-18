import axios from "axios";

const url = "http://localhost:8000/posts/";

export const addPostRequest = (postData) => axios.post(url, postData);

export const getUserPostsRequest = (id, posts) => axios.post(url + id, posts);

export const updatePostLikesRequest = (id, post) =>
  axios.post(url + `like/${id}`, post);
