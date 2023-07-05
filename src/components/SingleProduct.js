import React from "react";
import Image from "next/image";

import jewelery from "../assets/jewelery.jpg";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col">
        <Image src={jewelery} width={200} height={250} alt="image" />
        <p>{product.title}</p>
        <p>{product.author}</p>
        <p>{product.price} €</p>
      </div>
    </div>
  );
};

export default SingleProduct;
