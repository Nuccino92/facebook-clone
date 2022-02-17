import {
  GET_VIEWED_USER,
  VIEWED_USER_LOADING,
  VIEWED_USER_LOADED,
  GET_FRIEND_STATUS,
  MY_PROFILE,
  GET_FRIENDS_INFO,
  GET_POSTS,
} from "../actions/types";

const initialState = {
  isLoading: false,
  viewedUser: null,
  friends: null,
  myProfile: null,
  friendsInfo: [],
  postsInfo: [],
};

// the user being viewed, this user could the the logged in user as well
const viewedUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIEWED_USER_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case VIEWED_USER_LOADED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case GET_VIEWED_USER:
      return {
        ...state,
        viewedUser: action.payload,
      };

    case MY_PROFILE: {
      return {
        ...state,
        myProfile: action.payload[0] === action.payload[1],
      };
    }
    case GET_FRIEND_STATUS: {
      return {
        ...state,
        friends: action.payload[0].some(
          (friend) => friend === action.payload[1]
        ),
      };
    }
    case GET_FRIENDS_INFO: {
      return {
        ...state,
        friendsInfo: action.payload,
      };
    }
    case GET_POSTS: {
      return {
        ...state,
        postsInfo: action.payload.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        ),
      };
    }
    default:
      return state;
  }
};

export default viewedUserReducer;
