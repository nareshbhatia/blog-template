import {
  Card,
  CardCta,
  CardDescription,
  CardEyebrow,
  CardTitle,
} from '@/components/ui/card';
import type { Article } from '@/models';
import { formatDate } from '@/utils/format-date';

export interface ArticleItemProps {
  article: Article;
}

export function ArticleItem({ article }: ArticleItemProps) {
  return (
    <Card>
      <CardEyebrow>{formatDate(article.date)}</CardEyebrow>
      <CardTitle href={`/articles/${article.slug}`}>{article.title}</CardTitle>
      <CardDescription>{article.description}</CardDescription>
      <CardCta>Read article</CardCta>
    </Card>
  );
}
