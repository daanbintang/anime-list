"use client";

import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  function handleSearch(e) {
    e.preventDefault();
    if (keyword.length < 1) return;
    router.push(`/search/${keyword}`);
  }

  return (
    <div className="flex items-center">
      <button
        className="bg-primary"
        type="button"
        onClick={() => setKeyword("")}
      >
        {keyword.length > 0 ? <X size={24} /> : ""}
      </button>

      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={keyword}
          onChange={({ target }) => setKeyword(target.value)}
          placeholder="search anime"
          className="text-center text-black focus:outline-none bg-primary"
        />

        <button
          type={"submit"}
          className="bg-primary text-black"
        >
          <MagnifyingGlass size={24} />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
