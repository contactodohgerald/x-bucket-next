import axios from "axios";

const baseURL = "http://127.0.0.1:8080/api/v1";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1dWlkIjoiNjQ3YmEzZDU5OGNhZDE1NGI5N2ViZWIxIiwieHRpZmllciI6InhhbnRhLWFkbWluIiwiaXBBZGRyZXNzIjoiMTA1LjExMi4xNzcuMjI4IiwiaWF0IjoxNjg1ODI0Njg0LCJleHAiOjE2ODYyNTY2ODR9.pCrQ6ujGSGeRYVfj679Yz2Zn2ao8parHWfGDoscNglU'

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-type": "application/json",
    'Authorization': ''
  },
});

axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = token ? `Bearer ${token}` : '';
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
