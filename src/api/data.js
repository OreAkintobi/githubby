import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.github.com",
});

instance.interceptors.request.use(
  async (config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers["Accept"] = "application/json";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
