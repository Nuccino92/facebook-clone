import axios from "axios";

const url = "http://localhost:8000/comment/";

export const addCommentRequest = (data) => axios.post(url, data);
export const addCommentReplyRequest = (data) => axios.post(url + "reply", data);

export const getCommentRequest = (id) => axios.get(url + id);
export const getCommentAuthorRequest = (id) => axios.get(url + "user" + id);
