import { CLEAR_ERRORS, GET_ERRORS } from "./types";

export const returnErrors = (message, status, param, id = null) => {
  return {
    type: GET_ERRORS,
    payload: {
      message,
      status,
      param,
      id,
    },
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
