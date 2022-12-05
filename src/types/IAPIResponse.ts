import { IPagination } from '@/types/IPagination';

export type IAPIResponse<T> = IPagination & {
  results: T;
};
