import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/conversation/";

export const findConversationRequest = (userId, secondId) =>
  axios.get(url + `find/${userId}/${secondId}`, tokenRefreshConfig());

export const startConversationRequest = (userId, secondId) =>
  axios({
    method: "post",
    url: url,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    data: {
      userId,
      secondId,
    },
  });
