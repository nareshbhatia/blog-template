import { Code } from 'bright';

export type MdxPreProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLPreElement
>;

export function MdxPre({ children, ...props }: MdxPreProps) {
  <Code {...props} theme="material-default">
    {children}
  </Code>;
}
