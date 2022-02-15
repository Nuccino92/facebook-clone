import { combineReducers } from "redux";

import userReducer from "./user";
import errorReducer from "./errors";
import viewedUserReducer from "./viewedUser";

export default combineReducers({
  userReducer,
  errorReducer,
  viewedUserReducer,
});
