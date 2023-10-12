import { NavLink } from "@/src/types/NavLink";

export const navLinks: NavLink[] = [
  { id: 1, path: "/games", title: 'Games' },
  { id: 2, path: "/collection", title: 'Collection' },
];

export const dropdownLinks: NavLink[] = [
  { id: 1, path: "/profile", title: 'Profile' },
  { id: 2, path: "/collection", title: 'My collection' },
  { id: 3, path: "/settings", title: 'Settings' },
  { id: 4, path: "/authorization", title: 'Sign out' },
];