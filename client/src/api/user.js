import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "http://localhost:8000/user/";

const token = localStorage.getItem("token");
const config = tokenRefreshConfig(token);

export const getUserRequest = async (id) => await axios.get(url + id);

export const getUserFriendsRequest = (id, friends) =>
  axios.post(url + `friends/${id}`, friends, config);

export const getUserTimelineRequest = (id, friends) =>
  axios.post(url + `timeline/${id}`, friends, config);

export const addLikedPostRequest = (id, post, user) =>
  axios({
    method: "post",
    url: url + `liked/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      post,
      user,
    },
  });

export const getAllUsers = () => axios.get(url, config);

export const sendFriendRequest = (id, sender, recipient) =>
  axios({
    method: "post",
    url: url + `send-friend-request/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      sender,
      recipient,
    },
  });

export const acceptFriendRequest = (id, user, acceptedUser) =>
  axios({
    method: "post",
    url: url + `accept-friend-request/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      user,
      acceptedUser,
    },
  });

export const rejectFriendRequest = (id, user, rejectedUser) =>
  axios({
    method: "post",
    url: url + `reject-friend-request/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      user,
      rejectedUser,
    },
  });

export const removeFromFriendsRequest = (id, friend) =>
  axios.post(url + `remove-friend/${id}`, friend, config);

export const updateUser = (id, data) =>
  axios({
    method: "put",
    url: url + `update/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
