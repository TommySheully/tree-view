import { API } from '@/shared';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useDeleteNode = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteHandler, ...arg } = useMutation({
    mutationFn: async (id: string) => {
      return await API.deleteTree(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['tree']); // Инвалидируем запрос для дерева после успешного удаления
    },
    retry: false,
  });
  return { deleteHandler, ...arg };
};
