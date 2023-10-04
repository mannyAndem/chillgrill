import { useState } from "react";
import useFetch from "../hooks/useFetch";

const Search = ({ searchValue, setSearchValue, handleSubmit }) => {
  return (
    <form className="w-3/5 flex items-center" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        placeholder="Search recipes"
        className="search w-full bg-transparent shadow-sm py-2 pl-12 pr-4 border-lightGreen border-2 rounded-md rounded-r-none focus:outline-none text-darkGreen focus:border-darkGreen"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className=" p-2 border-2 border-lightGreen bg-lightGreen text-gray font-bold rounded-md rounded-l-none shadow-sm hover:bg-transparent hover:text-lightGreen transition-all duration-300 ease-out">
        Search
      </button>
    </form>
  );
};

export default Search;
