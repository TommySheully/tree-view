import { API } from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const useGetTree = () =>
  useQuery({
    queryKey: ['tree'],
    queryFn: () => API.getTree(),
  });
