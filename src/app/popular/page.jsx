"use client";
import Header from "@/components/AnimeList/Header";
import { useEffect, useState } from "react";
import PagiNation from "@/components/utils/PagiNation";

const { default: AnimeList } = require("@/components/AnimeList");

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  async function fetchAnime() {
    const req = await fetch(
      `${process.env.NEXT_PUBLIC_BASEURL}/top/anime?page=${page}`,
    );
    const data = await req.json();
    setTopAnime(data);
  }

  useEffect(() => {
    fetchAnime();
  }, [page]);


  return (
    <div className="container mx-auto">
      <Header title={"Most Popular Anime"} />
      <AnimeList api={topAnime} />
      {topAnime.length === 0
        ? ""
        : (
          <PagiNation
            lastPage={topAnime.pagination?.last_visible_page}
            setPage={setPage}
            page={page}
          />
        )}
    </div>
  );
};

export default Page;
