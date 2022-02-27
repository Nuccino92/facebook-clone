import {
  ACTIVE_CONVERSATION,
  SECOND_USER,
  CLOSE_CONVERSATION,
  UPDATE_SEARCHCARD,
} from "./types";

import {
  findConversationRequest,
  startConversationRequest,
} from "../../api/conversations";

export const findConversation = (userId, secondId) => async (dispatch) => {
  try {
    const res = await findConversationRequest(userId, secondId);
    if (res.data === null) {
      const response = await startConversationRequest(userId, secondId);

      dispatch({ type: ACTIVE_CONVERSATION, payload: response.data });
    } else dispatch({ type: ACTIVE_CONVERSATION, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const setOtherUser = (secondUser) => async (dispatch) => {
  return dispatch({ type: SECOND_USER, payload: secondUser });
};

export const closeConversation = () => async (dispatch) => {
  dispatch({ type: CLOSE_CONVERSATION });
  return dispatch({ type: SECOND_USER, payload: null });
};

export const handleSearchCard = (status) => async (dispatch) => {
  dispatch({ type: UPDATE_SEARCHCARD, payload: status });
};
