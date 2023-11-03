import { getAnimeResponse } from "@/app/libs/api-libs";
import P from "@/components/AnimeDetail/P";
import VideoPlayer from "@/components/utils/VideoPlayer";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const { data } = await getAnimeResponse(`anime/${id}`);

  return (
    <>
      <div className="text-primary container mx-auto px-2 flex flex-wrap md:flex-nowrap items-center justify-around gap-x-4 mt-24">
        <div className="relative">
          <Image
            src={data.images.webp.large_image_url}
            alt={data.title}
            width={300}
            height={300}
            className="brightness-50 w-full rounded-xl"
          />
          <div className="absolute top-0 z-10 right-0">
            <VideoPlayer
              youtubeId={data.trailer.youtube_id}
            />
          </div>
        </div>
        <div className="text-sm antialiased md:w-[60%]">
          <h1 className="font-bold md:text-lg my-4 text-center bg-accent py-1 rounded-xl">
            {data.title} - {data.year}
          </h1>
          <P title={"Synopsis"} content={data.synopsis} />

          {data.background != null
            ? <P title={"Background"} content={data.background} />
            : null}
        </div>
      </div>
    </>
  );
};

export default Page;
