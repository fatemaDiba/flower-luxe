"use server";

import { getFlowerCollection } from "@/lib/dbConnect";

export const fetchFlowers = async () => {
  const flowersCollection = await getFlowerCollection();
  const result = await flowersCollection.find().toArray();
  const flowers = result.map((flower) => ({
    ...flower,
    _id: flower._id.toString(),
  }));
  return flowers;
};
