import axios, { AxiosError, HttpStatusCode, type AxiosInstance } from 'axios';
import { toast } from 'react-toastify';
import { URL_BASE, URL_LOGIN, URL_LOGOUT, URL_REGISTER } from 'src/constants/endpoint';
import { AuthResponse } from 'src/types/auth.type';
import { clearLS, getAccessTokenFromLS, setAccessTokenToLS, setProfileToLS } from './auth';

class Http {
  private accessToken: string;
  public instance: AxiosInstance;

  constructor() {
    this.accessToken = getAccessTokenFromLS();

    this.instance = axios.create({
      baseURL: URL_BASE,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    });

    this.instance.interceptors.request.use(
      config => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`;
        }
        return config;
      },
      (error: AxiosError) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          toast.error('Some things wrong!');
        }
        return Promise.reject(error);
      }
    );

    this.instance.interceptors.response.use(
      response => {
        const { url } = response.config;
        if (url === URL_LOGIN || url === URL_REGISTER) {
          const data = response.data as AuthResponse;
          setProfileToLS(data.data.user);
          setAccessTokenToLS(data.token);
          this.accessToken = data.token;
        } else if (url === URL_LOGOUT) {
          this.accessToken = '';
          clearLS();
        }
        return response;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );
  }
}

const http = new Http().instance;

export default http;
