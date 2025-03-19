import axios, { InternalAxiosRequestConfig } from "axios";

type Options = {
  baseURL: string;
  timeout: number;
  headers: { "Content-Type": string };
  withCredentials: boolean;
};

const instanceOptions: Options = {
  baseURL: import.meta.env.VITE_API_ENV,
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

const fileInstanceOption: Options = {
  baseURL: import.meta.env.VITE_API_ENV,
  timeout: 30000,
  headers: { "Content-Type": "multipart/form-data" },
  withCredentials: true,
};

const setAccessTokenOnHeader = (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("auth");
  if (!token) {
    config.headers.accessToken = null;
    return config;
  }
  const { access } = JSON.parse(token);
  config.headers.Authorization = `Bearer ${access}`;
  return config;
};

function createAxiosInstance(options: Options) {
  const instance = axios.create(options);
  instance.interceptors.request.use(setAccessTokenOnHeader);
  instance.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (!axios.isAxiosError(error)) {
        return Promise.reject(error);
      }
      const { config, response } = error;
      if (
        response?.status === 401 &&
        error.config?.url === "/auth/token/refresh"
      ) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
      if (response?.status === 401 && config) {
        try {
          const token = localStorage.getItem("auth");
          if (!token) {
            return;
          }
          const { refresh } = JSON.parse(token);
          const res = await axiosInstance.post("/auth/token/refresh", {
            refresh,
          });
          const { access } = res.data;
          localStorage.setItem("auth", JSON.stringify({ refresh, access }));
          config.headers.Authorization = `Bearer ${access}`;
          return await axios(config);
        } catch (error) {
          localStorage.removeItem("auth");
          return Promise.reject();
        }
      }
      return Promise.reject(error);
    },
  );

  return instance;
}

export const axiosInstance = createAxiosInstance(instanceOptions);
export const axiosFileInstance = createAxiosInstance(fileInstanceOption);
