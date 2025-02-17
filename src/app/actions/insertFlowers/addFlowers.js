"use server";

import { getFlowerCollection } from "@/lib/dbConnect";

export const insertFlower = async (data) => {
  const price = parseInt(data?.price);
  const flowersCollection = await getFlowerCollection();
  const result = flowersCollection.insertOne({ ...data, price });
  return result;
};
