import { menu } from '@/shared/constants';

export const Sidebar = () => (
  <ul className='menu w-[200px] rounded-md border border-black/10'>
    <li className='menu-title'>Menu</li>
    {menu.map((item) => (
      <li key={item.title}>
        <a
          className='rounded-md'
          href={item.route}
        >
          {item.title}
        </a>
      </li>
    ))}
  </ul>
);
