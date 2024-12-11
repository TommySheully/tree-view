import { API } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateeNode = () => {
  const queryClient = useQueryClient();

  const { mutate: createHandler, ...arg } = useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      return await API.createTree(id, name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tree']);
    },
    retry: false,
  });
  return { createHandler, ...arg };
};
