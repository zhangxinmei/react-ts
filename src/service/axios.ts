import axios, { AxiosInstance } from 'axios';

import {
  config,
  request,
  requestFail,
  response,
  responseError
} from './config';

const ax = axios.create(config);
// 拦截器
ax.interceptors.request.use(request, requestFail);

ax.interceptors.response.use(response, responseError);

const CreateAxiosInstance = (): AxiosInstance => axios.create(config);

export default CreateAxiosInstance();
