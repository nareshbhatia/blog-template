import { cn } from '@/utils/cn';

interface TypographyProps {
  className?: string;
  children: React.ReactNode;
}

export function Heading1({ className, children }: TypographyProps) {
  return (
    <h1 className={cn('text-4xl font-extrabold', className)}>{children}</h1>
  );
}
