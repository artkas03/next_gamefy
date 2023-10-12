import { NavLink } from '@/src/types/NavLink';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import cn from 'classnames';

type Props = {
  linkInfo: NavLink,
}

const DropdownLink: React.FC<Props> = ({ linkInfo }) => {
  const {
    id,
    path,
    title
  } = linkInfo;

  const pathName = usePathname();

  return (
    <Link 
      href={path}
      className={cn('block px-4 py-2 text-sm text-gray-700 hover:bg-slate-500 hover:text-slate-100 transition-all duration-300', {
        "bg-gray-200": path === pathName,
      })}
      aria-current="page"
      id={`user-menu-item-${id}`}
    >
      {title}
    </Link>
  )
}

export default DropdownLink