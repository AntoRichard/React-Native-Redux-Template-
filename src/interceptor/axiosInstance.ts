import axios from 'axios';
import AsyncStorage from '../utils/AsyncStorage';
import {ApiRoutes} from '../routes/apiRoutes';

export const getHeaders = async () => {
  let headers;
  const token = await AsyncStorage.getItem('TOKEN');

  headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };
  return headers;
};

const axiosInstance = axios.create({
  baseURL: ApiRoutes.BASE_URL,
  timeout: 20000,
});

axiosInstance.interceptors.request.use(async config => {
  config.headers = await getHeaders();
  return config;
});

axiosInstance.interceptors.response.use(
  (response): any => {
    return {
      data: response.data,
      message: response.statusText,
      status: response.status,
    };
  },
  error => {
    const {response} = error;
    if (response.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
