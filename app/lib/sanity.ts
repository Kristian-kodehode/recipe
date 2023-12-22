import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "4mjs3e1d",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});
