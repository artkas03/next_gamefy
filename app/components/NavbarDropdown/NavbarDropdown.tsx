'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import avatar from '../../assets/images/photo_2023-07-12_17-09-07-gigapixel-hq-scale-2_00x.jpg';
import { dropdownLinks } from '../../config';
import DropdownLink from '../DropdownLink/DropdownLink';
import cn from 'classnames';
import { useOnClickOutside } from 'usehooks-ts'

const NavbarDropdown = () => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const ref = useRef(null);

  useOnClickOutside(ref, () => setIsDropdownShown(false));

  return (
    <div 
      className="relative ml-3"
      ref={ref}
    >
      <div>
        <button
          onPointerOver={() => setIsDropdownShown(true)}    
          type="button" 
          className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" 
          id="user-menu-button" 
          aria-expanded="false" 
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5"></span>
          <span className="sr-only">Open user menu</span>
          <Image className="h-8 w-8 rounded-full object-cover" src={avatar} alt="" />
        </button>
      </div>

      <div 
        className={cn("transition-opacity duration-300 opacity-0 absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none", {
          "opacity-100": isDropdownShown,
        })} 
        role="menu" 
        aria-orientation="vertical"
        aria-labelledby="user-menu-button"
      >
        {dropdownLinks.map((link) => (
          <DropdownLink linkInfo={link} key={link.id} />
        ))}
      </div>
    </div>
  )
}

export default NavbarDropdown