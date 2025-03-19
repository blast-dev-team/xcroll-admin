/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosFileInstance as fileInstance, axiosInstance as instance } from '@/apis/instance';

export const http = {
  get: function get<Response = unknown>(url: string, args?: any) {
    return instance
      .get<Response>(url, { params: args })
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  post: function post<Response = unknown, Request = any>(url: string, body?: Request) {
    return instance
      .post<Response>(url, body)
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  delete: function del<Response = unknown>(url: string, args?: any) {
    return instance
      .delete<Response>(url, { params: args })
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  put: function put<Response = unknown, Request = any>(url: string, body?: Request) {
    return instance
      .patch<Response>(url, body)
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  patch: function patch<Response = unknown, Request = any>(url: string, body?: Request) {
    return instance
      .patch<Response>(url, body)
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
  upload: function post<Response = unknown, Request = any>(url: string, body?: Request) {
    return fileInstance
      .post<Response>(url, body)
      .then(res => res.data)
      .catch(error => {
        console.error(error);
        return error;
      });
  },
};
