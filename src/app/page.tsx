import Link from 'next/link';
import { Nav } from '@/components/Nav';

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y">
        <Nav />
        <div className="mx-auto p-6">
          <article className="prose prose-slate prose-sky dark:prose-invert">
            <h1>Articles</h1>
            <ul>
              <li>
                <Link href="/blog/domain-driven-design">
                  Domain-Driven Design
                </Link>
              </li>
              <li>
                <Link href="/blog/markdown-syntax">Markdown Syntax</Link>
              </li>
              <li>
                <Link href="/blog/syntax-highlighting">
                  Syntax Highlighting
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </div>
  );
}
