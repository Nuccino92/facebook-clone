import {
  ACTIVE_CONVERSATION,
  CLOSE_CONVERSATION,
  SECOND_USER,
  UPDATE_SEARCHCARD,
} from "../actions/types";

const initialState = {
  activeConversation: null,
  secondUser: null,
  searchCard: false,
};

const conversationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.payload,
      };

    case CLOSE_CONVERSATION:
      return {
        ...state,
        activeConversation: null,
      };

    case SECOND_USER:
      return {
        ...state,
        secondUser: action.payload,
      };

    case UPDATE_SEARCHCARD:
      return {
        ...state,
        searchCard: action.payload,
      };

    default:
      return state;
  }
};
export default conversationReducer;
