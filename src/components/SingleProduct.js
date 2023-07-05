import React from "react";
import Link from "next/link";
import Image from "next/image";

import jewelery from "../assets/jewelery.jpg";

const SingleProduct = ({ product }) => {
  return (
    <div>
      <div className="flex flex-col">
        <Link href={`/product/${product.title.replace(/ /g, "-")}`}>
          <Image src={jewelery} width={200} height={250} alt="image" />
          <p>{product.title}</p>
          <p>{product.author}</p>
          <p>{product.price} €</p>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
