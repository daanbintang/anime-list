import Image from "next/image";
import Link from "next/link";
import React from "react";

const AnimeList = ({ api }) => {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 place-content-center">
        {api.data?.map((anime) => (
          <Link
            href={`/detail/${anime.mal_id}`}
            key={anime.mal_id}
            className="relative overflow-hidden group shadow-xl rounded-md text-primary mx-1"
          >
            <Image
              src={anime.images.webp.image_url}
              alt="..."
              width={400}
              height={400}
              className="hover:scale-110 hover:blur-sm w-full h-56 sm:h-72 brightness-50 object-cover rounded-t-md overflow-hidden"
            />
            <h1 className="absolute bottom-0 font-bold text-sm md:text-md p-2 font-bold">
              {anime.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AnimeList;
