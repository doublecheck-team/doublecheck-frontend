import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (originalRequest && error.response?.status === 400) {
      alert('400 Error');
    }else if(originalRequest && error.response?.status === 401) {
      alert('Unauthorized Error');
    }else if(originalRequest && error.response?.status === 403) {
      alert('Forbidden Error');
    }
    return Promise.reject(error);
  }
);