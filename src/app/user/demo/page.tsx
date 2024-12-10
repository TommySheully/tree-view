'use client';

import { useGetTree } from '@/shared/api/use-get-tree';
import { Skeleton, TreeView } from '@/shared';

const Demo = () => {
  const { data, isLoading } = useGetTree();

  if (isLoading) {
    return <Skeleton className='h-full w-full' />;
  }

  if (!data) {
    return <span>No data</span>;
  }

  return (
    <section
      className='bg-color-main'
      id='aboutAindra-main'
    >
      <TreeView
        name='Root'
        id={data.id}
        tree={data.children}
      />
    </section>
  );
};

export default Demo;
