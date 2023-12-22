import Link from "next/link";

export default function Home() {
  return (
    <section className="h-screen overflow-auto pt-32 flex flex-col gap-4">
      <h1 className="text-myPrimary text-center pb-8">
        Prøv en av mine 3 oppskrifter idag!
      </h1>
      <div className=" w-4/5 h-24 rounded-lg bg-taco bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Taco
          </h1>
        </Link>
      </div>
      <div className=" w-4/5 h-24 rounded-lg bg-pannekake bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Pannekaker
          </h1>
        </Link>
      </div>
      <div className=" w-4/5 h-24 rounded-lg bg-eplekake bg-cover bg-center self-center flex justify-center items-center">
        <Link href="/RecipePage">
          <h1 className="text-myWhite p-3 bg-none rounded-md hover:bg-black hover:bg-opacity-30">
            Eplekake
          </h1>
        </Link>
      </div>
    </section>
  );
}
