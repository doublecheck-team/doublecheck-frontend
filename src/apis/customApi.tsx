import { axiosInstance } from '@/apis/axiosInstance';
import { TGetProps, TPostProps } from '@/types/axiosType';
import { AxiosError } from 'axios';

export const fetchData = async ({
  url,
  params
}: TGetProps) => {
  try{
    const response = await axiosInstance.get(`${url}`, {
      params: params,
    });

    return { response: response?.data, status: response?.status };
  }catch (error: unknown) {
    if (error instanceof AxiosError) {
      return { response: error?.response?.data, status: error?.status };
    }

    return Promise.reject(error);
  }
}

export const postData = async ({
  url,
  requestMethod,
  body
}: TPostProps) => {
  try{
    const response = await axiosInstance({
      url: `${url}`,
      method: requestMethod,
      data: body,
    });

    return { response: response?.data?.data, status: response?.status };
  }catch (error) {
    if (error instanceof AxiosError) {
      return { response: error?.response?.data, status: error?.status };
    }

    return Promise.reject(error);
  }
}
