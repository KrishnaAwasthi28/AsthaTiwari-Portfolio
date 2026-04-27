import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "w31in0u8",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});