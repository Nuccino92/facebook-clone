import axios from "axios";

const url = "https://lit-spire-63005.herokuapp.com/register";

export const createUserRequest = (userData) => axios.post(url, userData);
