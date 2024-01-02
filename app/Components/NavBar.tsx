"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { client } from "../lib/sanity";
import { recipeProduct } from "..//interfaces";

// const getData = async () => {
//   const query = `*[_type == "recipe"]{
//     _id,
//     title,
//     instructions,
//     description,
//     image{asset},
//     "slug": slug.current,
//   }`;
//   const data = await client.fetch(query);
//   return data;
// };

const links = [
  {
    name: "Taco",
    href: "/Taco",
  },
  {
    name: "Pannekake",
    href: "/Pannekake",
  },
  {
    name: "Eplekake",
    href: "/Eplekake",
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
        {links.map((recipe, _id) => (
          <div key={_id}>
            {pathname === recipe.name ? (
              <Link
                href={`/recipe/${recipe.name}`}
                className="text-myPrimary underline underline-offset-8 font-semibold hover:text-mySecondary cursor-pointer">
                {recipe.name}
              </Link>
            ) : (
              <Link
                href={recipe.href}
                className="text-slate-400 hover:text-mySecondary cursor-pointer">
                {recipe.name}
              </Link>
            )}
          </div>
        ))}
      </div>

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
              {links.map((recipe, _id) => (
                <div key={_id}>
                  {pathname === recipe.href ? (
                    <Link
                      href={`/recipe/${recipe.href}`}
                      onClick={handleLinkClick}>
                      <h1 className="text-3xl text-white">{recipe.name}</h1>
                    </Link>
                  ) : (
                    <Link
                      href={recipe.href}
                      onClick={handleLinkClick}>
                      <h1 className="text-3xl text-mySecondary hover:text-mySecondary cursor-pointer">
                        {recipe.name}
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
