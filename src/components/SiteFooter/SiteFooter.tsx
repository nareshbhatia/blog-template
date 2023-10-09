import { cn } from '@/utils/cn';
import type * as React from 'react';

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className)}>
      <div className="container flex items-center justify-end py-10">
        <p className="text-sm leading-loose">
          © 2023 Naresh Bhatia. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
