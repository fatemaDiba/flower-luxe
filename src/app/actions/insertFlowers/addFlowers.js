"use server";

import { getFlowerCollection } from "@/lib/dbConnect";

export const insertFlower = async (data) => {
  console.log(data);
  const price = parseInt(data?.price);
  const flowersCollection = await getFlowerCollection();
  const result = flowersCollection.insertOne({ ...data, price });
  return {
    acknowledged: result.acknowledged,
    insertedId: result.insertedId.toString(), // Convert ObjectId to string
  };
};
