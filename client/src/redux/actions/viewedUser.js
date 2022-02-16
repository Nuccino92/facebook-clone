import { getUserFriendsRequest, getUserRequest } from "../../api/user";
// import { returnErrors } from "./errors";

import {
  GET_VIEWED_USER,
  VIEWED_USER_LOADING,
  VIEWED_USER_LOADED,
  GET_FRIEND_STATUS,
  MY_PROFILE,
  GET_FRIENDS_INFO,
} from "./types";

export const getUser = (id) => async (dispatch) => {
  dispatch({ type: VIEWED_USER_LOADING });
  try {
    const res = await getUserRequest(id);
    dispatch({ type: GET_VIEWED_USER, payload: res.data.response });
    dispatch({ type: VIEWED_USER_LOADED });
  } catch (err) {
    console.log(err);
  }
};

export const checkMyProfile = (data) => {
  return {
    type: MY_PROFILE,
    payload: data,
  };
};

export const checkFriendStatus = (data) => {
  return {
    type: GET_FRIEND_STATUS,
    payload: data,
  };
};

export const getFriendsInfo = (id, friends) => async (dispatch) => {
  try {
    const res = await getUserFriendsRequest(id, friends);

    dispatch({ type: GET_FRIENDS_INFO, payload: res.data });
  } catch (err) {
    console.log(err.response);
    // returnErrors
  }
};
