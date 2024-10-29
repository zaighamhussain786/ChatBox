import React, { useState } from "react";

import { ImSearch } from "react-icons/im";

const SearchInput = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className=" flex justify-between ">
        <input
          id="search"
          type="text"
          autoComplete="off"
          value={search}
          onChange={handleInputChange}
          className="  w-full 4xs:h-8 md:h-12 outline-none rounded-l-2xl rounded-r-none input bg-slate-600 text-gray-300 input-bordered"
        />
        <button
          type="submit"
          className="btn 4xs:btn-sm md:btn-md rounded-r-2xl rounded-l-none bg-red-500 text-gray-300 hover:bg-gray-700 hover:text-red-500 "
        >
          <ImSearch className="outline-none 4xs:h-4 md:h-6 4xs:w-4 md:w-6 " />
        </button>
      </div>
    </form>
  );
};

export default SearchInput;
