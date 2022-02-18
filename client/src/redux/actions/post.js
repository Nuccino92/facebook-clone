import { addPostRequest, getUserPostsRequest } from "../../api/post";
import { GET_POSTS } from "./types";
import { loadUser } from "./user";

export const addPost = (postData) => async (dispatch) => {
  try {
    await addPostRequest(postData);
    // updates userReducers user posts
    dispatch(loadUser());
  } catch (err) {
    // handled errors in frontend
    console.log(err);
  }
};

export const getUserPosts = (id, posts) => async (dispatch) => {
  try {
    const res = await getUserPostsRequest(id, posts);
    dispatch({ type: GET_POSTS, payload: res.data });
  } catch (err) {
    console.log(err.response);
  }
};
