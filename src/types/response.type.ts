export interface IPagination<T> {
  pageIndex: number;
  pageSize: number;
  records: T[];
  totalPages: number;
  totalRecords: number;
}

export interface IResponse<T> {
  code: string;
  data: T;
  message: string;
}

export interface IResponsePagination<T> extends IResponse<IPagination<T>> {}
