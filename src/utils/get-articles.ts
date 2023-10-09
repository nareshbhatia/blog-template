import type { Article } from '@/models';
import { glob } from 'fast-glob';
import * as path from 'path';

const ARTICLES_DIR = 'src/app/articles';

/**
 * Compares two dates as specified by the Array sort function
 * @param date1
 * @param date2
 */
function compare(date1: Date, date2: Date): number {
  if (date1 < date2) return -1;
  if (date1 > date2) return 1;
  return 0;
}

async function importArticle(file: string) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { meta } = await import(
    `${path.join(process.cwd(), ARTICLES_DIR)}/${file}`
  );

  const slug = file.substring(0, file.lastIndexOf('/'));
  return {
    slug,
    ...meta,
  } as Article;
}

export async function getArticles() {
  const files = await glob(['*/page.mdx'], {
    cwd: path.join(process.cwd(), ARTICLES_DIR),
  });

  const articles = await Promise.all(files.map(importArticle));

  return articles.sort((a, z) => compare(new Date(z.date), new Date(a.date)));
}
