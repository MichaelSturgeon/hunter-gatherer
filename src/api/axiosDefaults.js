// Imports
import axios from "axios";

// Set the default base URL for all axios requests
axios.defaults.baseURL = "https://hunter-gatherer-api-42e8d7d609ef.herokuapp.com/";
// Set the default content type for POST requests to 'multipart/form-data'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;
// Create axios instances for API requests
export const axiosReq = axios.create();
export const axiosRes = axios.create();