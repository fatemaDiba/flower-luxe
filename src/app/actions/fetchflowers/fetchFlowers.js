"use server";

import { getFlowerCollection } from "@/lib/dbConnect";

export const fetchFlowers = async () => {
  const flowersCollection = await getFlowerCollection();
  const result = await flowersCollection.find().toArray();
  return result;
};
