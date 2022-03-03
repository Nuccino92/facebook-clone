import { createUserRequest } from "../../api/register";
import { logInRequest } from "../../api/logIn";
import { returnErrors } from "./errors";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADING,
  USER_LOADED,
  AUTH_ERR,
  LOGOUT_SUCCESS,
  CLEAR_ERRORS,
  GET_TIMELINE,
  UPDATE_TAB,
} from "./types";
import { authRequest } from "../../api/auth";
import { tokenConfig, tokenRefreshConfig } from "../../config/token";
import { getUserTimelineRequest } from "../../api/user";

import { getUserPostsRequest } from "../../api/post";

export const createUser = (userData) => async (dispatch) => {
  try {
    const res = await createUserRequest(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    dispatch(returnErrors({}, null, null, "REGISTER_SUCCESS"));
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
    dispatch(
      returnErrors(
        // pulled out this way because of express validator
        err.response.data[0].msg,
        err.response.status,
        err.response.data[0].param,
        "REGISTER_FAIL"
      )
    );
  }
};

export const logInUser = (userData) => async (dispatch) => {
  try {
    const res = await logInRequest(userData);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(returnErrors({}, null, null, "LOGIN_SUCCESS"));
  } catch (err) {
    dispatch(
      returnErrors(
        err.response.data.message,
        err.response.status,
        err.response.data.param,
        "LOGIN_FAIL"
      )
    );
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const loadUser = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token");
  dispatch({ type: USER_LOADING });
  try {
    if (token !== null) {
      const res = await authRequest(tokenRefreshConfig());
      dispatch({ type: USER_LOADED, payload: res.data });
    } else {
      const res = await authRequest(tokenConfig(getState));
      dispatch({ type: USER_LOADED, payload: res.data });
    }
  } catch (err) {
    dispatch(
      returnErrors(err.response.data, err.response.status, "auth", "AUTH_ERR")
    );
    dispatch({ type: AUTH_ERR });
  }
};

export const logOutUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch({ type: CLEAR_ERRORS });
  } catch (err) {
    console.log(err);
  }
};

export const getUserTimeline =
  (user, friends, timelineTab) => async (dispatch) => {
    try {
      const res = await getUserTimelineRequest(user._id, friends);

      const filteredData = async () => {
        if (timelineTab === "new") {
          return res.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        } else if (timelineTab === "old") {
          return res.data.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
        } else if (timelineTab === "liked") {
          const res = await getUserPostsRequest(user, user.likedPosts);
          return res.data;
        } else return [];
      };

      dispatch({ type: GET_TIMELINE, payload: await filteredData() });
    } catch (err) {
      console.log(err);
    }
  };

// for filtering the timeline
export const updateTab = (selected) => {
  return {
    type: UPDATE_TAB,
    payload: selected,
  };
};
