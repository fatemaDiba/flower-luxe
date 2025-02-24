"use server";

import { getFlowerCollection } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export const singleFlower = async (id) => {
  const flowersCollection = await getFlowerCollection();
  const query = {
    _id: new ObjectId(id),
  };
  const result = await flowersCollection.findOne(query);
  const flower = {
    ...result,
    _id: result._id.toString(),
  };
  return flower;
};
