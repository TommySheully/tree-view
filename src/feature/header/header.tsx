import Image from 'next/image';
import { SidebarTrigger, Button } from '@/shared/ui';
import { img } from '@/assets';

export const Header = () => {
  return (
    <header className='flex w-full justify-center border-y border-black/10 p-2'>
      <div className='flex flex-1 items-center gap-2'>
        <SidebarTrigger />
        <Button
          variant='secondary'
          size='sm'
        >
          Back
        </Button>
      </div>

      <div className='h-[50px] w-[50px] shrink-0 rounded-full'>
        <Image
          alt='Tailwind CSS Navbar component'
          src={img}
          width={50}
          height={50}
          className='rounded-full'
        />
      </div>
    </header>
  );
};
