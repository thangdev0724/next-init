import axiosClient from '~/configs/axios';
import { IResponse } from '~/types';
import { stringtifyQuery } from '~/utils';
import { IGetCaptchaParams, IGetCaptchaResponse, ILoginResponse, ILoginValues } from './Login.type';

export const getCAPTCHAKEY = 'getCAPTCHA';
export const getCAPTCHA = (params: IGetCaptchaParams): Promise<IGetCaptchaResponse> => {
  const query = stringtifyQuery(params);
  const url = `/auth/captcha_image?${query}`;
  return axiosClient.get(url);
};

export type LoginResult = Awaited<ReturnType<typeof login>>;
export const login = (payload: ILoginValues): Promise<IResponse<ILoginResponse>> => {
  const url = '/auth/login';
  return axiosClient.post(url, payload);
};

export const logout = () => {
  const url = '/auth/logout';
  return axiosClient.patch(url);
};
