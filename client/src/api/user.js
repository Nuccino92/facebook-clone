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

export const sendFriendRequest = (id, sender, recipient) =>
  axios({
    method: "post",
    url: url + `send-friend-request/${id}`,
    data: {
      sender,
      recipient,
    },
  });

export const acceptFriendRequest = (id, user, acceptedUser) =>
  axios({
    method: "post",
    url: url + `accept-friend-request/${id}`,
    data: {
      user,
      acceptedUser,
    },
  });

export const rejectFriendRequest = (id, user, rejectedUser) =>
  axios({
    method: "post",
    url: url + `reject-friend-request/${id}`,
    data: {
      user,
      rejectedUser,
    },
  });

export const removeFromFriendsRequest = (id, friend) =>
  axios.post(url + `remove-friend/${id}`, friend);
