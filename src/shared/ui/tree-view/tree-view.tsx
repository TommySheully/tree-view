'use client';

import { Tree } from '@/shared';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ClickPresenter,
  Button,
} from '@/shared/ui';
import { useToggle } from '@/shared/hooks';
import { CaretDown, CaretUp, PlusCircle } from '@/shared/icon';
import { Pencil } from 'lucide-react';
import { DeleteModal } from '@/feature';
import { CreateModal } from '@/feature/create-modal';
import { RenameModal } from '@/feature/rename-modal';

type TreeViewProps = {
  name: string;
  id: string;
  tree: Tree[];
  isFirst?: boolean;
};

export const TreeView = ({ name, id, tree, isFirst = false }: TreeViewProps) => {
  const { isOpen, toggleHandler } = useToggle(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={toggleHandler}
      className='border-b border-black/10'
    >
      <CollapsibleTrigger className='flex w-full items-center justify-between gap-2'>
        <div className='flex items-center gap-2'>
          <div className='w-fit'>
            {!!tree?.length &&
              (isOpen ? (
                <CaretUp className='text-transparence-base-60 w-5' />
              ) : (
                <CaretDown className='text-transparence-base-60 w-5' />
              ))}
          </div>
          <span className='text-sm'>{name}</span>
        </div>
        <ClickPresenter className='flex gap-1'>
          <CreateModal id={id} />
          {isFirst && (
            <>
              <RenameModal
                name={name}
                id={id}
              />
              <DeleteModal
                name={name}
                id={id}
              />
            </>
          )}
        </ClickPresenter>
      </CollapsibleTrigger>
      <CollapsibleContent className='pl-2'>
        {tree &&
          tree.length > 0 &&
          tree.map((e) => (
            <TreeView
              isFirst
              key={e.id}
              name={e.name}
              id={e.id}
              tree={e.children}
            />
          ))}
      </CollapsibleContent>
    </Collapsible>
  );
};
