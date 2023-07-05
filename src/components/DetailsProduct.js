import React from "react";
import Image from "next/image";

import jewelery from "../assets/jewelery.jpg";

const DetailsProduct = (props) => {
  return (
    <div>
      <Image src={jewelery} width={360} height={540} alt="jewelery" />
      <h1>{props.product.title}</h1>
      <p>{props.product.author}</p>
      <p>{props.product.price}</p>
      <div>
        <p>{props.product.description}</p>
        <div className="flex items-center justify-around">
          {props.product.tags.map((tag) => {
            return (
              <div
                key={tag}
                className="text-xs border-2 border-zinc-100 rounded-md py-1 px-2 bg-slate-900"
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;
