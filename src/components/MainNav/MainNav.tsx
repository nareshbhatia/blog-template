'use client';

import { Nav } from './Nav';
import { MobileNav } from '@/components/MobileNav';
import { Icons } from '@/components/icons';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import * as React from 'react';

export function MainNav() {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6 md:gap-10">
      <Link className="hidden items-center space-x-2 md:flex" href="/">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <Nav />
      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => {
          setShowMobileMenu(!showMobileMenu);
        }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu ? <MobileNav /> : undefined}
    </div>
  );
}
