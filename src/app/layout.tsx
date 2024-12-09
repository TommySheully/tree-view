import '@/app/globals.css';
import { ReactNode } from 'react';
import { Header } from '@/feature/header/header';
import { Sidebar } from '@/feature/sidebar/sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className='flex h-full min-h-screen gap-1 rounded-md bg-color-main p-1'>
        <Sidebar />
        <main className='flex h-full w-full flex-col gap-2'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
