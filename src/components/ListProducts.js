import React, { useEffect, useState } from "react";
import axios from "axios";

import SingleProduct from "./SingleProduct";

const ListProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("/api/getallproducts").then(
      (response) => {
        console.log(response);
        setProducts(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <section className="pt-24 pb-10 w-[95%] mx-auto lg:w-[80%]">
      <div className="grid grid-cols-2 gap-2 min-[600px]:grid-cols-3 lg:grid-cols-4">
        {products &&
          products.map((product) => {
            return <SingleProduct key={product.id} product={product} />;
          })}
      </div>
    </section>
  );
};

export default ListProducts;
