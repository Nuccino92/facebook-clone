import axios from "axios";
import { tokenRefreshConfig } from "../config/token";

const url = "http://localhost:8000/user/";

const token = localStorage.getItem("token");

export const getUserRequest = async (id) => await axios.get(url + id);

export const getUserFriendsRequest = (id, friends) =>
  axios.post(url + `friends/${id}`, friends, tokenRefreshConfig(token));

export const getUserTimelineRequest = (id, friends) =>
  axios.post(url + `timeline/${id}`, friends, tokenRefreshConfig(token));

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

export const getAllUsers = () => axios.get(url, tokenRefreshConfig(token));

export const sendFriendRequest = (id, sender, recipient) =>
  axios(tokenRefreshConfig(token), {
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
  axios(tokenRefreshConfig(token), {
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
  axios.post(url + `remove-friend/${id}`, friend, tokenRefreshConfig(token));

export const updateUser = (id, data) =>
  axios({
    method: "put",
    url: url + `update/${id}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data,
  });
