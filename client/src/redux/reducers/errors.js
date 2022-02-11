import { GET_ERRORS, CLEAR_ERRORS } from "../actions/types";

const initialState = {
  message: {},
  status: null,
  param: null,
  // created id to identify error
  id: null,
};

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        message: action.payload.message,
        status: action.payload.status,
        param: action.payload.param,
        id: action.payload.id,
      };
    case CLEAR_ERRORS: {
      return {
        message: {},
        status: null,
        id: null,
        param: null,
      };
    }

    default:
      return state;
  }
};

export default errorReducer;
