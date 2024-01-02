import { recipeProduct } from "@/app/interfaces";
import { client } from "@/app/lib/sanity";
import React from "react";

const getData = async (slug: string) => {
  const query = `*[_type == "recipe" && slug.current == "${slug}"][0]{
    _id,
    title, 
    ingredients,
    instructions, 
    description, 
    image{asset},
    "slug": slug.current
  }`;
  const data = await client.fetch(query);
  return data;
};

const RecipePage = async ({ params }: { params: { slug: string } }) => {
  const data: recipeProduct = await getData(params.slug);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <section className="h-screen overflow-auto pt-32 pb-32 flex flex-col gap-4">
      <h1 className="text-myPrimary text-center p-4">{data.title}</h1>
      <p>This is the recipe page</p>
      <p>{data.title}</p>
      <ul className="flex flex-col gap-5">
        {data.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </section>
  );
};

export default RecipePage;
