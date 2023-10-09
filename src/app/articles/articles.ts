import type { Article } from '@/models';

export const articles: Article[] = [
  {
    slug: 'domain-driven-design',
    author: 'Naresh Bhatia',
    date: '2023-10-02',
    title: 'Domain-Driven Design',
    description:
      'Domain-Driven Design (DDD) is an approach for building high-quality products that meet the needs of a business and its customers. It emphasizes collaboration among domain experts, product managers, designers, engineers, and other disciplines to create a domain model that reflects these needs.',
  },
  {
    slug: 'hello-world',
    author: 'Naresh Bhatia',
    date: '2023-09-29',
    title: 'Hello World',
    description: 'Hello World Markdown example',
  },
  {
    slug: 'markdown-example',
    author: 'Naresh Bhatia',
    date: '2023-09-12',
    title: 'Markdown Example',
    description: 'Example of Markdown syntax',
  },
  {
    slug: 'syntax-highlighting',
    author: 'Naresh Bhatia',
    date: '2022-09-09',
    title: 'Syntax Highlighting',
    description: 'Syntax highlighting example',
  },
];
