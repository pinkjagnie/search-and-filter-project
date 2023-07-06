import React, { useState } from "react";

import { SlMagnifier } from "react-icons/sl";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (event) => {
    event.preventDefault();
    console.log(search);
    setSearch("");
  };

  return (
    <div>
      {/* Search bar */}
      <div className="w-[80%] h-[25vh] mt-10 mx-auto rounded-md bg-gray-600 flex items-center justify-center">
        <input
          type="search"
          name="search"
          placeholder="Search"
          value={search}
          className="bg-gray-100 text-gray-700 w-[80%] h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <button type="submit" className="-ml-12" onClick={searchHandler}>
          <SlMagnifier size={30} className="text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
