import { getAnimeResponse } from "@/app/libs/api-libs";
import AnimeList from "@/components/AnimeList";

const Page = async ({ params }) => {
  const decodeKeyword = decodeURI(params.keyword)
  
  const searchAnimeResults = await getAnimeResponse("anime", `q=${decodeKeyword}`)

  return (
    <section className="container mx-auto">
      <h1 className="font-bold text-md md:text-xl mb-4 text-primary">
        Search results from{" "}
        <span className="text-accent">{decodeKeyword}</span>
      </h1>
      {searchAnimeResults.data.length === 0
        ? <h1>Anime with title {decodeKeyword} is not found</h1>
        : <AnimeList api={searchAnimeResults} />}
    </section>
  );
};

export default Page;
