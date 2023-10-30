"use client";
import React from "react";
import { ArrowCircleLeft, ArrowCircleRight } from "@phosphor-icons/react";

const PagiNation = ({ page, setPage, lastPage }) => {
  function scrollTop(){
    scrollTo({
      behavior: "smooth",
      top: 0
    })
  }
  function handleNextPage() {
    setPage((prev) => prev + 1)
    scrollTop()
  }

  function handlePrevPage() {
    if (page === 1) return setPage(1);
    setPage((prev) => prev - 1)
    scrollTop() 
  }
  
  return (
    <div className="text-center font-bold bg-dark text-primary py-2 my-4 text-md md:text-2xl flex items-center justify-center gap-x-4"i>
      <button onClick={handlePrevPage} className="hover:text-accent">
        <ArrowCircleLeft width={24} />
      </button>
      <span>{page} of {lastPage}</span>
      <button
        type="button"
        onClick={handleNextPage}
        className="hover:text-accent"
      >
        <ArrowCircleRight width={24} />
      </button>
    </div>
  );
};

export default PagiNation;
