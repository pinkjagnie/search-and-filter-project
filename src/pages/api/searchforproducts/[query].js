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
      { title: { $regex: query_to_find, $options: "i" } },
      { description: { $regex: query_to_find, $options: "i" } },
      { tags: { $regex: query_to_find, $options: "i" } },
    ],
  }).exec();

  console.log("produkty z api " + products);

  res.status(201).json(products);
}
