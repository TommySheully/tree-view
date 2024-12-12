import '@/app/globals.css';
import { ReactNode } from 'react';
import { Header } from '@/feature';
import { SidebarProvider } from '@/shared/ui/sidebar';
import { AppSidebar } from '@/shared/ui/app-sidebar';
import QueryProvider from '@/shared/providers/provider';

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className='flex h-full min-h-screen bg-color-main'>
        <SidebarProvider className='bg-color-main'>
          <QueryProvider>
            <AppSidebar />
            <main className='flex h-screen w-full flex-col'>
              <Header />
              {children}
            </main>
          </QueryProvider>
        </SidebarProvider>
      </body>
    </html>
  );
};

export default RootLayout;
