import { ArticleItem } from './ArticleItem';
import type { Article } from '@/models';

export interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.slug} />
      ))}
    </ul>
  );
}
