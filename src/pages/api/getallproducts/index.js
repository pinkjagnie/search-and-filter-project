import connectToDatabase from "../../../../lib/db";
import Handmade from "../../../../models/Handmade";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  await connectToDatabase();

  const allProducts = await Handmade.find().exec();

  console.log("all prod?? " + allProducts);

  res.status(201).json(allProducts);
}
