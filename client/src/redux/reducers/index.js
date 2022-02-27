import { combineReducers } from "redux";

import userReducer from "./user";
import errorReducer from "./errors";
import viewedUserReducer from "./viewedUser";
import conversationReducer from "./conversation";

export default combineReducers({
  userReducer,
  errorReducer,
  viewedUserReducer,
  conversationReducer,
});
