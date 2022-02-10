import axios from "axios";

const url = "http://localhost:8000/register";

export const createUserRequest = (userData) => axios.post(url, userData);
