import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "https://lit-spire-63005.herokuapp.com/conversation/";

const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const findConversationRequest = (userId, secondId) =>
  axios.get(url + `find/${userId}/${secondId}`, config);

export const startConversationRequest = (userId, secondId) =>
  axios({
    method: "post",
    url: url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      userId,
      secondId,
    },
  });
