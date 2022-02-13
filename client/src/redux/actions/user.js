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
} from "./types";
import { authRequest } from "../../api/auth";
import { tokenConfig, tokenRefreshConfig } from "../../config/token";

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
      const res = await authRequest(tokenRefreshConfig(token));
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
