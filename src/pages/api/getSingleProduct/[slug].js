import connectToDatabase from "../../../../lib/db";
import Handmade from "../../../../models/Handmade";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const { slug } = req.query;

  let slug_to_find = slug;

  let title = slug_to_find.replace(/-/g, " ");

  await connectToDatabase();

  const singleProduct = await Handmade.findOne({ title: title }).exec();

  console.log("siiiiiiiiingleeeeeeeee " + singleProduct);

  res.status(201).json(singleProduct);
}
