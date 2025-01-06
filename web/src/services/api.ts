import axios, { AxiosRequestConfig } from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const promise = api({ ...config }).then(({ data }) => data);
  return promise;
};
