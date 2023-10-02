import RecipeCard from "./RecipeCard";
import { useState } from "react";

const DashboardFavourites = () => {
  const favourites = useState(null);
  return (
    <div className="px-8 py-2">
      <div className="mb-8 items-center flex justify-between">
        <h1 className="text-3xl text-darkGreen font-bold">Favourites</h1>
        <input
          type="search"
          placeholder="Search favourites"
          className="search w-3/5 bg-transparent shadow-sm py-2 pl-12 pr-4 border-lightGreen border-2 rounded-md focus:outline-none text-darkGreen focus:border-darkGreen"
        />
      </div>
      <div className="flex flex-col gap-8"></div>
    </div>
  );
};

export default DashboardFavourites;
