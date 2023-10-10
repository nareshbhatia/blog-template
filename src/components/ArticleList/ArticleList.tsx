import { ArticleItem } from './ArticleItem';
import type { Article } from '@/models';

export interface ArticleListProps {
  articles: Article[];
}

export function ArticleList({ articles }: ArticleListProps) {
  return (
    <ul className="flex flex-col space-y-16">
      {articles.map((article) => (
        <li key={article.slug}>
          <ArticleItem article={article} />
        </li>
      ))}
    </ul>
  );
}
