import axios from "axios";

const url = "http://localhost:8000/auth";

export const authRequest = (data) => axios.get(url, data);
