import type { Metadata } from 'next';
import { Toaster } from 'sonner';
import { QueryProvider } from '@/shared/lib/query';
import './globals.css';
import Header from '@/shared/ui/Header';
import Nav from '@/shared/ui/Nav';

export const metadata: Metadata = {
  title: '시민화폐광산',
  description:
    '광주광역시 광산구 주민을 위한 시민화폐 서비스의 운영과 관리를 담당하는 어드민 프로젝트입니다.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className='flex flex-col gap-6 bg-gray-50'>
        <QueryProvider>
          <Header />
          <Nav />
          {children}
          <Toaster position="top-center" expand={true} richColors />
        </QueryProvider>
      </body>
    </html>
  );
}
