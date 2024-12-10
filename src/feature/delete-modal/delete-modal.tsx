import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/shared/ui';
import { Trash } from '@/shared/icon';
import { useToggle } from '@/shared/hooks';
import { useDeleteNode } from '@/shared/api/use-delete-tree';

type DialogProps = {
  name: string;
  id: string;
};

export const DeleteModal = ({ name, id }: DialogProps) => {
  const { isOpen, toggleHandler, closeHandler } = useToggle();

  const { deleteHandler, isLoading } = useDeleteNode();

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
              <Trash />
            </Button>
          </DialogTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <DialogDescription>Delete</DialogDescription>
        </TooltipContent>
      </Tooltip>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Delete</DialogTitle>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <span className='text-md'>
            Do you want to delete <span className='text-red-600'>{name}</span>?
          </span>
        </div>
        <DialogFooter>
          <Button
            variant='destructive'
            onClick={closeHandler}
          >
            Close
          </Button>
          <Button
            disabled={isLoading}
            onClick={() => deleteHandler(id)}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
