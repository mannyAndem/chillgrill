import chillGrillLogo from "../assets/images/about.jpg";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { FavouritesContext } from "../contexts/FavouritesContext";

const RecipeCard = ({ recipe, addedToFavourites }) => {
  const { updateFavourites } = useContext(FavouritesContext);

  const handleClick = () => {
    updateFavourites(recipe);
  };

  return (
    <div className="relative flex flex-col lg:flex-row gap-8 p-8 bg-veryLightGreen bg-opacity-50 rounded-lg items-center hover:shadow-md transition-all duration-300 ease-out">
      <Link
        className="flex-shrink-0 cursor-pointer"
        to={`/dashboard/recipes/${recipe.id}`}
      >
        <img
          src={recipe.image}
          className="shadow-md h-40 w-40 object-cover rounded-md"
          alt="recipe-img"
        />
      </Link>
      <Link
        className="cursor-pointer flex-col justify-around items-center lg:items-start text-center lg:text-start"
        to={`/dashboard/recipes/${recipe.id}`}
      >
        <h3 className="text-2xl text-darkGreen font-bold mb-2">
          {recipe.title}
        </h3>
        <div className="flex gap-2 items-center justify-center lg:justify-start mt-2">
          <img
            src={chillGrillLogo}
            className="w-8 h-8 rounded-full border border-darkGreen"
          />
          <span className="block font-bold text-xs text-lightGreen">
            The ChillGrill
          </span>
        </div>
      </Link>

      <Link
        className="cursor-pointer hidden lg:flex absolute top-4 right-4 p-4 justify-center items-center bg-darkGreen rounded-xl"
        to={`/dashboard/recipes/${recipe.id}`}
      >
        <span className="text-gray text-sm">Click for details</span>
      </Link>

      {/* favourite */}
      <BsFillBookmarkFill
        color={addedToFavourites ? "#79AC78" : "#D0E7D2"}
        size={28}
        className="absolute bottom-4 right-4 cursor-pointer"
        onClick={handleClick}
      />
    </div>
  );
};

export default RecipeCard;
