import axios from "axios";

const url = `${process.env.REACT_APP_SERVER_URL}auth`;

export const authRequest = (data) => axios.get(url, data);
