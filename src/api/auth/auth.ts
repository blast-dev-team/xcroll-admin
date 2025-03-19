import { AxiosError } from 'axios';

import { axiosInstance } from '../instance';

export const login = async ({ email, password }: { email: string; password: string }) => {
  try {
    const response = await axiosInstance.post(`/auth/token`, {
      email,
      password,
    });
    const auth = response.data;
    localStorage.setItem('auth', JSON.stringify(auth));
    return response;
  } catch (error: unknown) {
    const axiosError = error as AxiosError;
    return Promise.reject(axiosError.message);
  }
};
