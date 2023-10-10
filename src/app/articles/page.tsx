import { articles } from './articles';
import { ArticleList } from '@/components/ArticleList';
import { Heading1 } from '@/components/Typography';
// import { getArticles } from '@/utils/get-articles';

export default function Articles() {
  // const articles = await getArticles();
  return (
    <div className="mt-6">
      <Heading1>My Articles</Heading1>
      <div className="mt-10">
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}
