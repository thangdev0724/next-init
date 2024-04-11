import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query';
import { GET_HOMEDATA_KEY, IGetHomeDataResult, getHomeData } from './Home.api';
import { IQueryParams } from '~/types';

export const useGetHomeData = ({
  options,
}: IQueryParams = {}): UseQueryResult<IGetHomeDataResult> => {
  const _options: UseQueryOptions<IGetHomeDataResult, any, any> = {
    queryKey: [GET_HOMEDATA_KEY],
    queryFn: getHomeData,
    ...options,
  };

  return useQuery(_options);
};
