import axios from "axios";

export const getUserRequest = async (id) =>
  await axios.get(`http://localhost:8000/user/${id}`);

export const getUserFriendsRequest = (id, friends) =>
  axios.post(`http://localhost:8000/user/friends/${id}`, friends);
