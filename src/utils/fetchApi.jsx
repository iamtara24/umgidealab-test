import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// Menghapus page dari parameter URL
const fetchData = async (url, limit) => {
  const response = await axios.get(`${url}?limit=${limit}`);
  return response.data;
};

// Menghilangkan page dari queryKey, dan menyesuaikan fungsi query
export const useFetchData = (endpoint, limit = 10) => {
  return useQuery({
    queryKey: [endpoint, limit],  // Hanya menggunakan endpoint dan limit
    queryFn: () => fetchData(endpoint, limit),
  });
};