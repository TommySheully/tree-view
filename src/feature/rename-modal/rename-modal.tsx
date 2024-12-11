import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormInput,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/shared/ui';
import { useRenameModal } from '@/feature/rename-modal/model';
import { Pencil } from 'lucide-react';

type CreateModalProps = {
  id: string;
  name: string;
};

export const RenameModal = ({ id, name }: CreateModalProps) => {
  const {
    modal: { isOpen, toggleHandler, closeHandler },
    state: { form, control, isLoading, isValid },
    onSubmit,
  } = useRenameModal(id, name);

  return (
    <Dialog
      open={isOpen}
      onOpenChange={toggleHandler}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <DialogTrigger asChild>
            <Button
              variant='link'
              size='icon'
            >
              <Pencil />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <DialogDescription>Rename</DialogDescription>
        </TooltipContent>
      </Tooltip>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Rename</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form className='grid gap-4 py-4'>
            <FormInput
              control={control}
              name='name'
              label='Name'
              placeholder='Enter Name'
            />
          </form>
        </Form>
        <DialogFooter>
          <Button
            variant='destructive'
            onClick={closeHandler}
          >
            Close
          </Button>
          <Button
            disabled={isLoading || !isValid}
            onClick={onSubmit}
          >
            Rename
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
