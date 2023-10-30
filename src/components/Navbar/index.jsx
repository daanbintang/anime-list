import Link from "next/link";
import React from "react";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="shadow-md bg-accent p-2 mb-5">
      <nav className="text-white flex text-color-dark flex-col md:flex-row items-center py-2 justify-around">
        <Link href={"/"} className="font-bold">AnimeList.io</Link>
        <ul className="flex items-center gap-x-4">
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
