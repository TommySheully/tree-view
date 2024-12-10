import Image from 'next/image';

export const Header = () => {
  return (
    <header className='flex w-full justify-center'>
      <div className='navbar border-y border-black/10'>
        <div className='flex-1'>
          <button className='btn btn-circle rounded-md text-xs shadow-xl'>Back</button>
        </div>
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <div
              tabIndex={0}
              role='button'
              className='avatar btn btn-circle btn-ghost'
            >
              <div className='rounded-full'>
                <Image
                  alt='Tailwind CSS Navbar component'
                  src='https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp'
                  width={20}
                  height={20}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
            >
              <li>
                <a className='justify-between'>
                  Profile
                  <span className='badge'>New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
