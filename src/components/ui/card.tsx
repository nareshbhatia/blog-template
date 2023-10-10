import { Icons } from '@/components/icons';
import { cn } from '@/utils/cn';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import type * as React from 'react';

export interface BaseCardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: BaseCardProps) {
  return (
    <div
      className={cn(
        'group relative flex flex-col items-start bg-card text-card-foreground',
        className
      )}
    >
      {children}
    </div>
  );
}

type CardLinkProps = LinkProps & { children: React.ReactNode };

function CardLink({ children, ...props }: CardLinkProps) {
  return (
    <>
      <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-accent opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
}

export interface CardTitleProps extends BaseCardProps {
  href: string;
}

export function CardTitle({ href, className, children }: CardTitleProps) {
  return (
    <h3 className={cn('text-base font-semibold tracking-tight', className)}>
      <CardLink href={href}>{children}</CardLink>
    </h3>
  );
}

export function CardDescription({ className, children }: BaseCardProps) {
  return (
    <p
      className={cn(
        'relative z-10 mt-2 text-sm text-muted-foreground',
        className
      )}
    >
      {children}
    </p>
  );
}

export function CardCta({ children }: { children: React.ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-medium text-primary"
    >
      {children}
      <Icons.chevronRight className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
}

export function CardEyebrow({ className, children }: BaseCardProps) {
  return (
    <div
      className={cn(
        'relative z-10 order-first mb-3 flex items-center text-muted-foreground text-sm pl-3.5',
        className
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 flex items-center"
      >
        <span className="h-4 w-0.5 rounded-full bg-bright" />
      </span>
      {children}
    </div>
  );
}
