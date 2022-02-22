import axios from "axios";

const url = "http://localhost:8000/user/";

export const getUserRequest = async (id) => await axios.get(url + id);

export const getUserFriendsRequest = (id, friends) =>
  axios.post(url + `friends/${id}`, friends);

export const getUserTimelineRequest = (id, friends) =>
  axios.post(url + `timeline/${id}`, friends);

export const addLikedPostRequest = (id, post, user) =>
  axios({
    method: "post",
    url: url + `liked/${id}`,
    data: {
      post,
      user,
    },
  });

export const getAllUsers = () => axios.get(url);
