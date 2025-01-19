import axios from "axios";

axios.defaults.baseURL = "https://hunter-gatherer-api-42e8d7d609ef.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();