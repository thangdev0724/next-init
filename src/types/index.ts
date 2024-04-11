import { ReactNode } from 'react';
import { UseQueryOptions } from '@tanstack/react-query';

export * from './response.type';

export interface IReactChildren {
  children: ReactNode;
}

export interface IIconProps {
  size?: number | number;
  color?: string;
  style?: object;
}

export interface IBaseDataSource {
  key?: any;
}

export interface IQueryParams<TParams = any, TOptions = UseQueryOptions<any, any, any>> {
  options?: TOptions;
  params?: TParams;
}

export interface IBaseFilter {
  pageSize?: number;
  pageIndex?: number;
  sortBy?: string;
  orderBy?: 1 | -1;
}

export interface IBaseModalRef {
  open: () => void;
  close: () => void;
}
