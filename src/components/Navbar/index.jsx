import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="fixed w-full z-20 shadow-md bg-transparent backdrop-blur p-2 rounded-b-xl top-0">
      <nav className="text-white flex text-color-dark flex-col md:flex-row items-center py-2 justify-around">
        <Link href={"/"} className="font-bold text-primary mb-1">AnimeList.io</Link>
        <ul className="flex items-center gap-x-4 text-primary">
          <li className="hidden md:block">
            <Link href={"/"}>Home</Link>
          </li>
        </ul>
        <SearchInput />
      </nav>
    </header>
  );
};

export default Navbar;
