import axiosClient from '~/configs/axios';

export const GET_HOMEDATA_KEY = ['getHomeData'];
export interface IGetHomeDataResult extends Awaited<ReturnType<typeof getHomeData>> {}
export const getHomeData = (): Promise<any> => {
  const url = 'http://192.168.1.99:9090/api/logtacdong/action';
  return axiosClient.get(url);
};
