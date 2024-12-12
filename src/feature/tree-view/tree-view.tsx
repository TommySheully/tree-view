'use client';

import { Tree } from '@/shared';
import { ClickPresenter, Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/shared/ui';
import { useToggle } from '@/shared/hooks';
import { CaretDown, CaretUp } from '@/shared/icon';
import { CreateModalProps, DialogProps, RenameModalProps } from '@/feature';
import { ReactNode } from 'react';

type TreeViewProps = {
  name: string;
  id: string;
  tree: Tree[];
  isFirst?: boolean;
  createModal: (props: CreateModalProps) => ReactNode;
  renameModal: (props: RenameModalProps) => ReactNode;
  deleteModal: (props: DialogProps) => ReactNode;
};

export const TreeView = ({
  name,
  id,
  tree,
  isFirst = false,
  deleteModal,
  renameModal,
  createModal,
}: TreeViewProps) => {
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
          {createModal({ id })}
          {isFirst && (
            <>
              {renameModal({ id, name })}
              {deleteModal({ id, name })}
            </>
          )}
        </ClickPresenter>
      </CollapsibleTrigger>
      <CollapsibleContent className='pl-2'>
        {tree &&
          tree.length > 0 &&
          tree.map((e) => (
            <TreeView
              createModal={createModal}
              renameModal={renameModal}
              deleteModal={deleteModal}
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
