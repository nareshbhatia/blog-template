import { ArticleList } from '@/components/ArticleList';
import { Nav } from '@/components/Nav';
import { getArticles } from '@/utils/get-articles';

export default async function Home() {
  const articles = await getArticles();
  return (
    <div className="mx-auto max-w-3xl p-4">
      <div className="divide-y">
        <Nav />
        <div className="mx-auto p-6">
          <article className="prose prose-slate prose-sky dark:prose-invert">
            <h2>My Articles</h2>
            <ArticleList articles={articles} />
          </article>
        </div>
      </div>
    </div>
  );
}
