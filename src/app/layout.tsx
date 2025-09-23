import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '@/context/AuthContext';

export const metadata: Metadata = {
  title: 'FundingFrame',
  description: 'AI-powered grant writing and funding management platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
