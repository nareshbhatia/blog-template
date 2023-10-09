export interface NavItem {
  title: string;
  href: string;
  disabled?: boolean;
}

export type MainNavItem = NavItem;

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  // ogImage: string;
  links: {
    twitter: string;
    github: string;
    linkedin: string;
    medium: string;
  };
  mainNav: MainNavItem[];
}

export const siteConfig: SiteConfig = {
  name: 'Naresh Bhatia',
  description: 'Software engineer, founder, and amateur musician.',
  url: 'https://nareshbhatia.dev',
  // ogImage: "https://nareshbhatia.dev/og.jpg",
  links: {
    twitter: 'https://twitter.com/NareshJBhatia',
    github: 'https://github.com/nareshbhatia',
    linkedin: 'https://www.linkedin.com/in/nareshbhatiaarch/',
    medium: 'https://medium.com/@NareshBhatia',
  },
  mainNav: [
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Articles',
      href: '/articles',
    },
  ],
};
