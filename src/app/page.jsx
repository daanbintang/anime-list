import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
  const reqTopAnime = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/top/anime?limit=8`,
  );
  const topAnime = await reqTopAnime.json();

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
