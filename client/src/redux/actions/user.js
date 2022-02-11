import { createUserRequest } from "../../api/user";
import { returnErrors } from "./errors";

import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

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
        err.response.data[0].msg,
        err.response.status,
        err.response.data[0].param,
        "REGISTER_FAIL"
      )
    );
  }
};
