import { API, RequestWithPagination } from '@/shared';
import { useQuery } from '@tanstack/react-query';

export const useGetJournal = (val: RequestWithPagination) =>
  useQuery({
    queryKey: ['journal', val],
    queryFn: () => API.getJournalWithPagination(val),
  });
