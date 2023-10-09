import { articles } from './articles';
import { ArticleList } from '@/components/ArticleList';
// import { getArticles } from '@/utils/get-articles';

export default function Articles() {
  // const articles = await getArticles();
  return (
    <div className="mt-6">
      <h1>My Articles</h1>
      <ArticleList articles={articles} />
    </div>
  );
}
