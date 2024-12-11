import { API } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useRenameNode = () => {
  const queryClient = useQueryClient();

  const { mutate: renameHandler, ...arg } = useMutation({
    mutationFn: async ({ id, name }: { id: string; name: string }) => {
      return await API.renameTree(id, name);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tree']);
    },
    retry: false,
  });
  return { createHandler: renameHandler, ...arg };
};
