export interface Article {
  slug: string;
  author: string;
  date: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  role: string;
  years: string[];
  stars?: number;
}
