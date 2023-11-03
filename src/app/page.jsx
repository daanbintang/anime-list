import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "./libs/api-libs";

const Page = async () => {
  const topAnime = await getAnimeResponse("top/anime", "limit=8")

  return (
    <div className="container mx-auto px-2">
      <section>
        <Header title={"Popular Anime"} linkHref={"/popular"} />
        <AnimeList api={topAnime} />
      </section>
    </div>
  );
};
export default Page;
