import useApi from '../hooks/useApi';
import CreateAxiosInstance from './axios';

function queryClientTrade(
  update: boolean,
  params: {
    token: string;
    pageNum: number;
    pageSize: number;
  },
  cb?: () => void
) {
  return useApi<ICustomeList>(
    {
      url: process.env.API_URL,
      method: 'get',
      params
    },
    CreateAxiosInstance,
    update,
    cb!
  );
}

export default { queryClientTrade };
