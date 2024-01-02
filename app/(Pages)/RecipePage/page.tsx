import React from "react";
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

const RecipePage = async () => {
  const data = await getData();
  return (
    <section className="h-screen overflow-auto pt-32 pb-32 flex flex-col gap-4">
      <h1 className="text-myPrimary text-center p-4">{data.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, dolores
        quod velit exercitationem atque architecto, cupiditate repellat iusto
        perferendis ut officiis modi excepturi culpa nesciunt assumenda.
        Architecto officiis repudiandae maiores fuga recusandae debitis sapiente
        vitae quis, laboriosam corporis facere perspiciatis assumenda adipisci
        delectus voluptatibus magnam asperiores sed obcaecati laborum ipsa
        voluptatem eaque mollitia ab. Officia fuga molestiae ut! Sequi fugit,
        quod, sunt labore sed sapiente eveniet esse quis iure ab distinctio
        voluptas possimus fuga nisi eaque dolor corrupti quam molestias ducimus
        in non. Quaerat provident asperiores quos soluta earum vero! Veritatis
        est ipsa, quo dignissimos soluta alias dicta eveniet! Exercitationem
        commodi ipsa asperiores nostrum quia tempore libero impedit. Eveniet
        eaque laudantium, hic incidunt aliquam aut inventore, doloremque labore
        eum dolor iure iusto magnam molestiae fugiat obcaecati libero cum, quo
        vero saepe delectus expedita quidem est facilis at. Nobis reprehenderit
        nihil ab libero corporis, consectetur quaerat, aut rerum, enim harum
        exercitationem. Perferendis, rem error animi, totam ipsa consequuntur
        consectetur nostrum, quidem suscipit exercitationem magni? Vero optio
        repudiandae fugit fuga velit incidunt? Eveniet quibusdam voluptatum
        accusantium ipsam voluptates dolor aperiam sequi, sed incidunt officia
        maiores labore atque laboriosam tempore nobis aliquam tenetur? Iste
        necessitatibus recusandae vitae temporibus quos, corporis commodi
        cupiditate. Esse quaerat nihil odit impedit numquam debitis ut
        voluptatum unde enim optio aliquid voluptates, repellat eos eum itaque!
        Aut possimus, laborum perferendis ad dolorem itaque laboriosam facilis
        provident nisi ut, in perspiciatis aperiam dicta eum et. Fugit facere
        pariatur officiis cumque doloremque, ullam commodi suscipit architecto
        ut enim similique et ipsum inventore voluptatum quam ea tenetur velit,
        ducimus voluptate id non quis iure dignissimos! Illum, ipsa quia? Earum
        inventore amet quis, quo nostrum nulla sunt architecto maiores cumque
        expedita porro reiciendis sint. Repellendus, odio iure alias eius
        veritatis dicta eum delectus odit eveniet reiciendis a impedit. Laborum,
        saepe nemo fugiat quas repellat quidem iste enim, deleniti odio debitis
        sunt qui fuga. Tempora, consectetur? Doloremque in doloribus illum
        accusantium perspiciatis laudantium. Non saepe accusamus reprehenderit
        totam sequi, autem eligendi sapiente doloribus quidem, magnam
        perferendis dignissimos nostrum blanditiis, deserunt quos natus dolores
        deleniti expedita dignissimos
      </p>
    </section>
  );
};

export default RecipePage;
