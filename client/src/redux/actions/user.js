import { createUserRequest } from "../../api/user";

import { REGISTER_FAIL, REGISTER_SUCCESS } from "./types";

export const createUser = (userData) => async (dispatch) => {
  try {
    const res = await createUserRequest(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
