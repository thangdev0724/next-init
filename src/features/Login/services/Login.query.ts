import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { IQueryParams } from '~/types';
import { getCAPTCHA, getCAPTCHAKEY } from './Login.api';
import { IGetCaptchaParams, IGetCaptchaResponse } from './Login.type';

export const useGetCAPTCHA = ({
  params,
  options,
}: IQueryParams<IGetCaptchaParams> = {}): UseQueryResult<IGetCaptchaResponse> => {
  const queryKey = params ? [getCAPTCHAKEY, params] : undefined;
  const _options: UseQueryOptions<IGetCaptchaResponse, any, any> = {
    queryKey: queryKey,
    queryFn: () => getCAPTCHA(params as IGetCaptchaParams),
    staleTime: 0,
    cacheTime: 0,
    ...options,
  };
  return useQuery(_options);
};
