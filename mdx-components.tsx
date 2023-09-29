import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';

/*
 * This file allows you to provide custom React components
 * to be used in MDX files. You can import and use any
 * React component you want, including components from
 * other libraries.
 */

/* Default theme is "dark-plus" */
// Code.theme = 'material-default';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
  };
}
