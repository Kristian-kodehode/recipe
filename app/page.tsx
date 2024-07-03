import Link from "next/link";
import Image from "next/image";

import { client, urlFor } from "@/app/lib/sanity";
import { recipeProduct } from "./interfaces";

const getData = async () => {
  const query = `*[_type == "recipe"]{
    _id,
    title, 
    instructions, 
    description, 
    image{asset},
    "slug": slug.current,
  }`;

  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data: recipeProduct[] = await getData();
  return (
    <section className="h-screen overflow-auto pt-32 flex flex-col gap-4 px-4 mx-auto max-w-[800px]">
      <h1 className="text-myPrimary text-center pb-8">
        Prøv en av mine {data.length} <br />
        oppskrifter idag!
      </h1>
      <div className="flex flex-col gap-4">
        {data.map((recipe, _id) => (
          <div
            key={recipe._id}
            className="relative cursor-pointer overflow-hidden w-full h-24 rounded-lg self-center ">
            <Link
              href={`/${recipe.slug}`}
              className="flex justify-center items-center w-full h-full">
              <h1 className="absolute py-4 text-myWhite bg-none w-full h-full text-center hover:bg-gray-900 hover:bg-opacity-60 hover:backdrop-blur-sm">
                {recipe.title}
              </h1>
              <Image
                alt="Recipe image"
                src={urlFor(recipe.image).url()}
                objectFit="fill"
                width={1200}
                height={800}
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
