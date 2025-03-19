export interface IListData<T> {
  total: number;
  hasNext: boolean;
  nextOffset: number;
  items: T[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TableTitlesType = {
  title: string;
  dataIndex: string | string[];
  key: string;
  render?: (value: any, columns: any) => JSX.Element;
  width?: number;
}[];
