import DomainDrivenDesign from './domain-driven-design.mdx';
import { Nav } from '@/components/Nav';

export default function Page() {
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y">
        <Nav />
        <div className="mx-auto p-6">
          <article className="prose prose-slate prose-sky dark:prose-invert">
            <DomainDrivenDesign />
          </article>
        </div>
      </div>
    </div>
  );
}
