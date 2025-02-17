import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.r7pee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
async function dbConnect() {
  try {
    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    return client.db("flowerLuxe");
  } catch (error) {
    console.log("error", error);
  }
}

export const getFlowerCollection = async () => {
  const db = await dbConnect();
  return db.collection("flowersCollection");
};
