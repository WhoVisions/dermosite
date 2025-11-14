import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dermosite - Next.js 16 App',
  description: 'Modern Next.js 16 application with React 19.2, Turbopack, and Tailwind CSS v4.1',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
