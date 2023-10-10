import { MainNav } from '@/components/MainNav';
import { ModeToggle } from '@/components/ModeToggle';
import { SiteFooter } from '@/components/SiteFooter';
import { ThemeProvider } from '@/components/theme-provider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Naresh Bhatia',
  description: 'Naresh Bhatia',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <div className="flex min-h-screen flex-col">
            <header className="container z-40 bg-background">
              <div className="flex h-20 items-center py-6">
                <MainNav />
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="container flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
