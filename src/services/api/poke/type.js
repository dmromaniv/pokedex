import { axiosInstance } from '.';

export async function fetchType() {
  const response = await axiosInstance.get('api/v2/type?limit=999');

  return response;
}
