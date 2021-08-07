import axios, { AxiosRequestConfig } from 'axios';

interface IAxiosInstance {
  get<R>(path: string, config?: IApiCallerConfig): Promise<R>;
  post<R>(path: string, payload?: object, config?: IApiCallerConfig): Promise<R>;
  put<R>(path: string, payload: object, config?: IApiCallerConfig): Promise<R>;
  delete<R>(path: string, config?: IApiCallerConfig): Promise<R>;
  patch<R>(path: string, payload: object, config?: IApiCallerConfig): Promise<R>;
}

export interface IApiCallerConfig extends AxiosRequestConfig {
  uid?: string;
  Authorization?: string;
}

const apiCaller = {
  get: <T>(path: string, config?: IApiCallerConfig) => (axios as IAxiosInstance).get<T>(path, config),
  post: <T>(path: string, payload?: any, config?: IApiCallerConfig) =>
    (axios as IAxiosInstance).post<T>(path, payload, config),
  put: <T>(path: string, payload: object, config?: IApiCallerConfig) =>
    (axios as IAxiosInstance).put<T>(path, payload, config),
  delete: <T>(path: string, config?: IApiCallerConfig) => (axios as IAxiosInstance).delete<T>(path, config),
  patch: <T>(path: string, payload: object, config?: IApiCallerConfig) =>
    (axios as IAxiosInstance).patch<T>(path, payload, config),
};

export default apiCaller;
