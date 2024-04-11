import { notification } from 'antd';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IResponse } from '~/types';
import { handleRefreshToken } from '~/utils/refreshToken';
import tokenManager from '~/utils/tokenManager';

export interface IOriginRequest extends AxiosRequestConfig {
  _retry: boolean;
}

const handleRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  //check token
  const access_token = tokenManager.getAccessToken();
  if (access_token && config.headers) {
    config.headers['Authorization'] = 'Bearer ' + access_token;
  }

  // config.validateStatus = function (status) {
  //   return (status >= 200 && status < 300) || status === 404; // default
  // };

  return config;
};

const handleRequestError = (error: AxiosError): Promise<AxiosError> => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  //Trả thẳng về data trong trường hợp là phương thức là GET
  if (response.config.method === 'get') return response?.data?.data;

  //show message and throw error
  if (response?.data?.code !== 2000 && response?.data?.errors?.length > 0) {
    response?.data?.errors.forEach((error: any) => {
      notification.error({
        message: 'Thất bại!',
        description: error.errorMessage,
      });
    });
    throw response.data;
  }

  return response?.data;
};

const handleResponseError = async (error: AxiosError<IResponse<any>>) => {
  console.log('Request error: ', { error });

  const originalRequest = error.config as IOriginRequest;

  //handle refresh token
  if (error.response?.status === 401 && !originalRequest._retry) {
    handleRefreshToken(originalRequest);
    return;
  }

  //show message error
  // if (error.response?.status !== 404) {
  notification.error({
    message: 'Thất bại!',
    description: error.response?.data?.message || error.message,
  });
  // }

  return Promise.reject(error.response?.data);
};

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.request.use(handleRequest as any, handleRequestError);
axiosClient.interceptors.response.use(handleResponse, handleResponseError);

export default axiosClient;
