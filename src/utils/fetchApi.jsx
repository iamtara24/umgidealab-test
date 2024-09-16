import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Delete page from URL param
const fetchData = async (url, limit) => {
  const response = await axios.get(`${url}?limit=${limit}`);
  return response.data;
};

// delete page from queryKey, and adjust func query
export const useFetchData = (endpoint, limit = 10) => {
  return useQuery({
    queryKey: [endpoint, limit],
    queryFn: () => fetchData(endpoint, limit),
  });
};