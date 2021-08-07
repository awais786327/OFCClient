import { createQueryString } from './createQueryString';
import { environment } from '../../environments/environment';

export const createApiUrl = (endPoint: string, params?: any, baseUrl = environment.baseURL) => {
  if (params) {
    const query = createQueryString(params);
    return `${baseUrl}${endPoint}?${query}`;
  } else {
    return `${baseUrl}${endPoint}`;
  }
};
