import axios from "axios";

const url = "https://facebook-clone-production.up.railway.app/auth";

export const authRequest = (data) => axios.get(url, data);
