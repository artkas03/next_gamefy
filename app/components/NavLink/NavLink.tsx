'use client';

import { NavLink } from '@/src/types/NavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import cn from 'classnames';

type Props = {
  linkInfo: NavLink,
}

const NavLink: React.FC<Props> = ({ linkInfo }) => {
  const {
    path,
    title,
  } = linkInfo;
  
  const pathName = usePathname();

  return (
    <Link
      href={path}
      className={cn("rounded-md px-3 py-2 text-sm font-medium transition-all duration-300", {
        "bg-gray-900 text-white": pathName === path,
        "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md": pathName !== path,
      })}
      aria-current="page"
    >
      {title}
    </Link>
  )
}

export default NavLink