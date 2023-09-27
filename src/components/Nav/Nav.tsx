'use client';

import { ModeToggle } from './ModeToggle';
import Link from 'next/link';

export function Nav() {
  return (
    <nav className="flex items-center px-6 py-4 text-sm font-medium">
      <div className="flex-1 text-sm sm:text-lg">
        <Link href="/">Naresh Bhatia</Link>
      </div>
      <ul className="flex items-center space-x-5 sm:space-x-10">
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
