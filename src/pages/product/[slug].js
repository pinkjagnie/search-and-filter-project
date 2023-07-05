import React, { useEffect } from "react";
import axios from "axios";

import DetailsProduct from "@/components/DetailsProduct";

const productDetailsPage = (props) => {
  // useEffect(() => {
  //   console.log(props.singleProduct);
  // }, []);

  return (
    <section className="pt-24 pb-10 w-[95%] mx-auto lg:w-[80%]">
      <DetailsProduct product={props.singleProduct} />
    </section>
  );
};

export default productDetailsPage;

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  console.log("slag z pages " + slug);

  let url = `http://localhost:3001/api/getSingleProduct/${slug}`;
  console.log("ju el rl " + url);

  // let response = axios.get(url);
  // let singleProduct = await response.data;

  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  let singleProduct = await res.json();

  console.log("single product z pagesssss " + singleProduct[0]);

  return {
    props: {
      singleProduct: singleProduct,
    },
  };
}
