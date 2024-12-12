import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createValidationSchema, CreateValidationSchema } from './scheme';
import { useCreateeNode } from '@/shared/api';
import { useToggle } from '@/shared/hooks';

export const useCreateModal = (id: string) => {
  const { createHandler, isLoading } = useCreateeNode();

  const { isOpen, toggleHandler, closeHandler } = useToggle();

  const form = useForm<CreateValidationSchema>({
    defaultValues: { name: '' },
    resolver: zodResolver(createValidationSchema),
    mode: 'onTouched',
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = form;

  const onSubmit = handleSubmit(({ name }) => {
    createHandler({ id, name }, { onSuccess: closeHandler });
  });

  return {
    state: {
      form,
      control,
      isLoading,
      isValid,
    },
    modal: { isOpen, toggleHandler, closeHandler },
    onSubmit,
  };
};
