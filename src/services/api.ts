import axios, { CreateAxiosDefaults } from "axios";

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "ngrok-skip-browser-warning": true,
  },
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${window.accessToken}`;
    return config;
  },
  (error) => error
);

_axios.interceptors.response.use(
  (response) => response,
  (error) => {
    throw new Error(error);
  }
);

export default _axios;
