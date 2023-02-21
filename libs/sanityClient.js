import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "h3s6mw7p",
  dataset: "production",
  apiVersion: "2023-02-21",
  useCdn: true,
  token: process.env.NEXT_APP_SANITY_TOKEN,
});

const imageBuilder = imageUrlBuilder(client);

export const urlFor = (source) => imageBuilder.image(source);
