import { FavouritesContext } from "../contexts/FavouritesContext";
import RecipeCard from "./RecipeCard";
import { useContext, useState } from "react";

const DashboardFavourites = () => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="px-8 py-2">
      <h1 className="mb-8 text-3xl text-darkGreen font-bold">Favourites</h1>

      <div className="flex flex-col gap-8">
        {favourites &&
          favourites.map((recipe) => (
            <RecipeCard recipe={recipe} addedToFavourites={true} />
          ))}
      </div>
    </div>
  );
};

export default DashboardFavourites;
