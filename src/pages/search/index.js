import React from "react";

import SearchBar from "@/components/SearchBar";

const searchPage = () => {
  return (
    <section className="pt-28 min-h-screen">
      <h1 className="text-center text-2xl font-bold">To search enter below</h1>
      <SearchBar />
    </section>
  );
};

export default searchPage;
