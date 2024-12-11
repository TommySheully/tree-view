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
import { PlusCircle } from '@/shared/icon';
import { useCreateModal } from '@/feature/create-modal/model';

type CreateModalProps = {
  id: string;
};

export const CreateModal = ({ id }: CreateModalProps) => {
  const {
    modal: { isOpen, toggleHandler, closeHandler },
    state: { form, control, isLoading, isValid },
    onSubmit,
  } = useCreateModal(id);

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
              <PlusCircle />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <DialogDescription>Add</DialogDescription>
        </TooltipContent>
      </Tooltip>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Add</DialogTitle>
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
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
