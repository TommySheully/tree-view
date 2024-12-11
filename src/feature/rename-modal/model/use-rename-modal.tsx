import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { createValidationSchema, CreateValidationSchema } from './scheme';
import { useToggle } from '@/shared/hooks';
import { useRenameNode } from '@/shared';

export const useRenameModal = (id: string, name: string) => {
  const { createHandler, isLoading } = useRenameNode();

  const { isOpen, toggleHandler, closeHandler } = useToggle();

  const form = useForm<CreateValidationSchema>({
    defaultValues: { name },
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
