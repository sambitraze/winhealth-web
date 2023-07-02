import React, { useState } from 'react';
import Logo from './Logo';
import { NAVITEMS } from '../contants/navItems';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NavItem = ({ item }) => {
  const router = useRouter();

  return (
    <Link
      key={item.id}
      href={item.href}
      className={`${
        router.pathname === item.href ? 'underline' : 'hover:underline'
      } max-w-fit font-medium uppercase text-themeBlue underline-offset-4 transition-all duration-300`}
    >
      {item.name}
    </Link>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="py-4 shadow-xl">
      <div className="container flex items-center justify-between">
        <Logo />

        <div className="hidden items-center justify-between gap-8 lg:flex">
          {NAVITEMS.map((item) => {
            return <NavItem key={item.id} item={item} />;
          })}
        </div>

        <div className="lg:hidden">
          {!isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-themeBlue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path
                className="text-themeBlue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 cursor-pointer text-themeBlue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <path
                className="text-themeBlue"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
          <div>
            {isMenuOpen && (
              <div
                className={`absolute left-0 top-24 z-20 flex w-full flex-col gap-4 bg-white p-4 py-8`}
              >
                {NAVITEMS.map((item) => {
                  return <NavItem key={item.id} item={item} />;
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
