import axios from "axios";

const url = "https://lit-spire-63005.herokuapp.com/auth";

export const authRequest = (data) => axios.get(url, data);
