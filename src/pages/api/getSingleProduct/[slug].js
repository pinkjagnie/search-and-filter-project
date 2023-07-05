import connectToDatabase from "../../../../lib/db";
import Handmade from "../../../../models/Handmade";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return;
  }

  const { slug } = req.query;

  let slug_to_find = slug;

  // let str = "This-is-a-news-item-";
  let title = slug_to_find.replace(/-/g, " ");

  // const { slug } = req.body;

  console.log("slag z apiiii " + slug_to_find);
  console.log("tajtlyyy z api " + title);

  // let title = slug.replace(/-/g, " ");

  // {/article/${article.title.replace(/ /g, "-")}}

  // const { title } = req.body;

  // console.log("tajtle " + title);

  await connectToDatabase();

  const singleProduct = await Handmade.findOne({ title: title }).exec();

  console.log("siiiiiiiiingleeeeeeeee " + singleProduct);

  res.status(201).json(singleProduct);
}
