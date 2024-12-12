'use client';

import { Skeleton } from '@/shared';
import { useGetJournal } from '@/shared/api/use-get-journal';

const Journal = () => {
  const { data, isLoading } = useGetJournal({
    body: {},
    params: {
      skip: 0,
      take: 25,
    },
  });

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
    ></section>
  );
};

export default Journal;
