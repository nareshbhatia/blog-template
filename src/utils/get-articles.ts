import type { Article } from '@/models';
import { glob } from 'fast-glob';
import * as path from 'path';

export async function getArticles() {
  const files = await glob(['*/page.mdx'], {
    cwd: path.join(process.cwd(), 'src/app/articles'),
  });

  return files.map((file) => {
    const slug = file.substring(0, file.lastIndexOf('/'));
    return {
      title: slug,
      slug,
      date: '2023-01-01',
      tags: ['tech'],
      description: 'This is cool',
      body: 'Hello World',
    } as Article;
  });
}
