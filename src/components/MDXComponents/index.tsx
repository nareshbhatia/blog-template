import { MDXImage } from './mdx-image';
import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';
import NextImage from 'next/image';

export const mdxComponents: MDXComponents = {
  pre: ({
    children,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLPreElement
  >) => (
    // TODO: extract title from children
    <Code {...props} theme="material-default">
      {children}
    </Code>
  ),
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
  img: MDXImage as any,
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any
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
      {summary ? <summary>{summary}</summary> : undefined}
      {children}
    </details>
  ),
};
