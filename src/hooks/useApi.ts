import { useState, useEffect } from 'react';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import UseApiResponse from '../service/useApiResponse';

function useAPI<T>(
  options: AxiosRequestConfig,
  client: AxiosInstance,
  update: boolean,
  cb:()=>void,
): UseApiResponse<T> {
  const [settings, setSettings] = useState(new UseApiResponse<T>());
  const fetchingData = async () => {
    setSettings({ ...settings, isLoading: true });
    try {
      const response = await client.request<T>(options);
      setSettings({
        error: '',
        isLoading: false,
        result: response.data
      });
    } catch (error) {
      setSettings({
        result: null,
        isLoading: false,
        error: error.message
      });
    }
    cb();
    return () => {
      setSettings(new UseApiResponse<T>());
    };
  };

  useEffect(() => {
    fetchingData();
  }, [update]);
  return settings;
}

export default useAPI;
