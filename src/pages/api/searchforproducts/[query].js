import connectToDatabase from "../../../../lib/db";
import Handmade from "../../../../models/Handmade";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const { query } = req.query;

  let query_to_find = query;

  await connectToDatabase();

  const products = await Handmade.find({
    $or: [
      { title: query_to_find },
      { description: query_to_find },
      { tags: query_to_find },
    ],
  }).exec();

  console.log("produkty z api " + products);

  res.status(201).json(products);
}
