"use client";
import Header from "@/components/AnimeList/Header";
import { useEffect, useState } from "react";
import PagiNation from "@/components/utils/PagiNation";
import { getAnimeResponse } from "../libs/api-libs";
import AnimeList from "@/components/AnimeList";

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  async function fetchAnime() {
    const data = await getAnimeResponse("top/anime", `page=${page}`)
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
