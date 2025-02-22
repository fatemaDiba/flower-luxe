"use server";

import { getFlowerCollection } from "@/lib/dbConnect";

export const insertFlower = async (data) => {
  const price = parseInt(data?.price);
  const flowersCollection = await getFlowerCollection();
  const result = await flowersCollection.insertOne({ ...data, price });
  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(), // Convert ObjectId to string
  };
};
