import React, { useState, useRef } from "react";
import axios from "axios";

import SingleProduct from "./SingleProduct";

import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  const searchRef = useRef();
  const [filteredData, setFilteredData] = useState([]);

  const searchHandler = (event) => {
    event.preventDefault();

    let query = searchRef.current.value;
    console.log(query);

    searchFilteredProducts(query);

    searchRef.current.value = "";
  };

  const searchFilteredProducts = (query) => {
    let url = `/api/searchforproducts/${query}`;
    console.log("url " + url);

    axios.get(url).then(
      (response) => {
        console.log(response);
        setFilteredData(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <>
      <div>
        {/* Search bar */}
        <div className="w-[80%] h-[25vh] mt-10 mx-auto rounded-md bg-gray-600 flex items-center justify-center">
          <input
            type="text"
            name="search"
            placeholder="Search"
            ref={searchRef}
            className="bg-gray-100 text-gray-700 w-[80%] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          />
          <button type="submit" className="-ml-12" onClick={searchHandler}>
            <SlMagnifier size={30} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="pt-12">
        {filteredData.length === 0 && searchRef !== "" ? (
          <p className="text-center font-bold text-xl pb-6">
            Sorry, there are no results
          </p>
        ) : (
          <p className="text-center font-bold text-xl pb-6">
            There are {filteredData.length} results that match what you are
            looking for
          </p>
        )}
        {filteredData && (
          <div className="w-[90%] mx-auto grid grid-cols-2 gap-2 min-[600px]:grid-cols-3 lg:grid-cols-4 pb-10">
            {filteredData.map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;
