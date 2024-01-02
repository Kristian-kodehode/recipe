import { createClient } from "next-sanity";
import imageBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

export const client = createClient({
  projectId: projectId,
  dataset: dataset,
  apiVersion: apiVersion,
  useCdn: false,
});

const builder = imageBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
