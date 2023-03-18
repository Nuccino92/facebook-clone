import axios from "axios";

const url = "https://facebook-clone-production.up.railway.app/register";

export const createUserRequest = (userData) => axios.post(url, userData);
