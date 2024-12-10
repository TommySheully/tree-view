import '@/app/globals.css';
import { ReactNode } from 'react';
import { Header } from '@/feature/header/header';
import { Sidebar } from '@/feature/sidebar/sidebar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className='flex h-full min-h-screen bg-color-main'>
        <Sidebar />
        <main className='flex h-full w-full flex-col'>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
