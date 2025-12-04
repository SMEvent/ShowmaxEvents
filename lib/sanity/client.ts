import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

if (!projectId || !dataset) {
  throw new Error(
    `Missing required Sanity environment variables. Please set:
    - NEXT_PUBLIC_SANITY_PROJECT_ID
    - NEXT_PUBLIC_SANITY_DATASET
    
    These should be added in your Vercel project settings under Environment Variables.`
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-01-01",
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});

export async function sanityFetch<T>({
  query,
  tags,
}: {
  query: string;
  tags?: string[];
}): Promise<T> {
  return client.fetch<T>(query, {}, { next: { tags } });
}

