import {createCurrentUserHook, createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  basePath: process.env.NEXT_PUBLIC_SANITY_BASE_PATH || "",
  
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-08-11",
  useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuilder(config).image(source)
