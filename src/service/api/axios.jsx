import axios from "axios";
import { getToken } from "../userService";

export const BASE_URL = "http://localhost:8080";
export const api = axios.create({
  baseURL: BASE_URL,
});

export const apiPrivate = axios.create({
  baseURL: "http://localhost:8080",
});

apiPrivate.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;

      config.headers["Content-Type"] = "application/json";
      console.log(config);
    }
    return config;
  },
  (error) => Promise.reject(error)
);
