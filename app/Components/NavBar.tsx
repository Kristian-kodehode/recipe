"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Taco",
    href: "recipe/taco",
  },
  {
    name: "Pannekake",
    href: "recipe/pannekaker",
  },
  {
    name: "Eplekake",
    href: "recipe/eplekake",
  },
];

const NavBar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white flex justify-between p-8 items-center mb-4 shadow-lg z-10">
      <div className="flex ">
        <Link
          href="/"
          className="text-myPrimary hover:text-mySecondary">
          <h2>Foodie</h2>
        </Link>
      </div>
      <div className="hidden  sm:flex text-slate-800  gap-4 justify-end">
        {links.map((link, idx) => (
          <div key={idx}>
            {pathname === link.name ? (
              <Link
                href={`/recipe/${link.href}`}
                className="text-myPrimary underline underline-offset-8 font-semibold hover:text-mySecondary cursor-pointer">
                {link.name}
              </Link>
            ) : (
              <Link
                href={link.href}
                className="text-slate-400 hover:text-mySecondary cursor-pointer">
                {link.name}
              </Link>
            )}
          </div>
        ))}
      </div>
      {/* // This is the hamburger menu */}
      <div className="sm:hidden  flex flex-col items-end justify-end ">
        <button
          className="text-black"
          onClick={toggle}>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              className="heroicon-ui"
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
        </button>
        {isOpen && (
          <div>
            <div
              className="fixed inset-0 z-40 bg-mySecondary opacity-80 cursor-pointer"
              onClick={toggle}></div>
            <div className="bg-myPrimary fixed top-0 left-0 z-50 h-1/2 flex flex-col justify-around items-center gap-6 w-full">
              {links.map((link, idx) => (
                <div key={idx}>
                  {pathname === link.name ? (
                    <Link
                      href={`/recipe/${link.href}`}
                      onClick={handleLinkClick}>
                      <h1 className="text-3xl text-white">{link.name}</h1>
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}>
                      <h1 className="text-3xl text-mySecondary hover:text-mySecondary cursor-pointer">
                        {link.name}
                      </h1>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
