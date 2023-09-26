import { MDXComponents } from 'mdx/types';
import NextImage from 'next/image';
import { Code } from 'bright';
import { MDXImage } from './mdx-image';

export const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => {
    // TODO: extract title from children
    return (
      <Code {...props} theme="material-default">
        {children as any}
      </Code>
    );
  },
  img: MDXImage as any,
  Image: NextImage as any,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    // Necessary due to a hydration error I can't quite figure out
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
};
