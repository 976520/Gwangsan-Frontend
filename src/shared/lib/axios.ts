import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { authConfig } from '../config/auth';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const baseURL = process.env.NEXT_PUBLIC_API_URL;

export const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        /* const refreshToken = getCookie('refreshToken');
        if (!refreshToken) {
          throw new Error('No refresh accessToken');
        }

        const response = await instance.post<{ accessToken: string }>(
          '/auth/reissue',
          {
            refreshToken,
          },
        );

        const { accessToken } = response.data;
        setCookie('accessToken', accessToken); */

        // originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return instance(originalRequest);
      } catch (error) {
        deleteCookie('accessToken');
        deleteCookie('refreshToken');
        window.location.href = authConfig.signInPage;
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  },
);
