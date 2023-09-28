export interface Article {
  title: string;
  slug: string;
  date: string;
  tags: string[];
  description: string;
  body: string;
  lastModified?: number;
  views?: number;
}

export interface Project {
  title: string;
  description: string;
  href: string;
  role: string;
  years: string[];
  stars?: number;
}
