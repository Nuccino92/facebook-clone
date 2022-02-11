import { createUserRequest } from "../../api/register";
import { logInRequest } from "../../api/logIn";
import { returnErrors } from "./errors";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./types";

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
