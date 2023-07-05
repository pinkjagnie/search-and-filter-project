import React from "react";
import Image from "next/image";

import jewelery from "../assets/jewelery.jpg";

const DetailsProduct = (props) => {
  return (
    <div className="w-[90%] min-[600px]:w-[60%] mx-auto">
      <div className="flex items-center justify-center">
        <Image src={jewelery} width={360} height={540} alt="jewelery" />
      </div>
      <h1 className="uppercase font-bold text-2xl text-center pt-6 pb-4">
        {props.product.title}
      </h1>
      <p className="uppercase font-medium text-lg">
        Author: {props.product.author}
      </p>
      <p>{props.product.price} €</p>
      <div className="pt-6">
        <p>Description:</p>
        <p>{props.product.description}</p>
        <div className="text-xs italic py-1 px-2 text-gray-400 pt-6">
          Item number: {props.product.id}
        </div>
        <div className="w-[40%] flex items-center justify-around pt-2">
          {props.product.tags.map((tag) => {
            return (
              <div key={tag} className="text-xs italic py-1 px-2 text-gray-400">
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
