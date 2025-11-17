import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
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

