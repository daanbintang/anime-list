import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  const req = await fetch(
    `${process.env.NEXT_PUBLIC_BASEURL}/anime/${params.id}/full`,
  );
  const { data } = await req.json();

  return (
    <div className="text-primary container mx-auto px-2 flex items-center justify-around">
      <div>
        <h1>{data.title}</h1>
      </div>
      <div>
        <Image
          src={data.images.webp.large_image_url}
          alt={data.title}
          width={300}
          height={300}
          className="w-full brightness-50"
        />
      </div>
    </div>
  );
};

export default Page;
