import { Nav } from '@/components/Nav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Naresh Bhatia',
  description: 'Naresh Bhatia',
};

interface PostLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: PostLayoutProps) {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y">
        <Nav />
        <div className="mx-auto p-6">
          <article className="prose prose-slate prose-sky dark:prose-invert">
            {children}
          </article>
        </div>
      </div>
    </div>
  );
}
