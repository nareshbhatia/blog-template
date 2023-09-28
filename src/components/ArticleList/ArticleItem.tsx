import type { Article } from '@/models';
import Link from 'next/link';

export interface ArticleItemProps {
  article: Article;
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <li>
      <Link href={`/articles/${article.slug}`}>{article.title}</Link>
    </li>
  );
}
