import React from "react";

import DetailsProduct from "@/components/DetailsProduct";

const productDetailsPage = (props) => {
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

  let url = `http://localhost:3001/api/getSingleProduct/${slug}`;

  let res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  let singleProduct = await res.json();

  return {
    props: {
      singleProduct: singleProduct,
    },
  };
}
