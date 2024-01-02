import Link from "next/link";

import { client } from "@/app/lib/sanity";

const getData = async () => {
  const query = `*[_type == "recipe"]{
    title, 
    instructions, 
    description, 
    image
  }`;
  const data = await client.fetch(query);
  return data;
};

export default async function Home() {
  const data = await getData();
  return (
    <section className="h-screen overflow-auto pt-32 flex flex-col gap-4 px-4 mx-auto max-w-[800px]">
      <h1 className="text-myPrimary text-center pb-8">
        Prøv en av mine 3 <br />
        oppskrifter idag! {data.length}
      </h1>
      <div className=" w-full h-24 rounded-lg bg-taco bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Taco
          </h1>
        </Link>
      </div>
      <div className=" w-full h-24 rounded-lg bg-pannekake bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Pannekaker
          </h1>
        </Link>
      </div>
      <div className=" w-full h-24 rounded-lg bg-eplekake bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Eplekake
          </h1>
        </Link>
      </div>
    </section>
  );
}
