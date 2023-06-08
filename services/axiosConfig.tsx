import axios from "axios";
import { loggedInUser } from "./default";

const baseURL = "https://x-bucket.onrender.com/api/v1";

const userLoggedIn = loggedInUser()

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    'Authorization': ''
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = userLoggedIn ? `Bearer ${userLoggedIn.token}` : '';
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      console.error("Server responded with an error:", error.response.data);
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error setting up the request:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
