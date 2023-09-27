import { mdxComponents } from '@/components/MDXComponents';
import { MDXRemote } from 'next-mdx-remote/rsc';

import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';

export function PostBody({ children }: { children: string }) {
  return (
    <MDXRemote
      components={mdxComponents}
      options={{
        mdxOptions: {
          remarkPlugins: [
            // Adds support for GitHub Flavored Markdown
            remarkGfm,
            // generates a table of contents based on headings
            remarkToc,
          ],
          // These work together to add IDs and linkify headings
          rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
        },
      }}
      source={children}
    />
  );
}
