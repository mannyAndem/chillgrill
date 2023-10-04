import jollofImg from "../assets/images/jollof-img.jpg";
import chillGrillLogo from "../assets/images/about.jpg";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  return (
    <Link
      className="relative flex gap-8 p-8 bg-veryLightGreen bg-opacity-50 rounded-lg items-center cursor-pointer hover:shadow-md transition-all duration-300 ease-out"
      to={`/dashboard/recipes/${recipe.id}`}
    >
      <div className="flex-shrink-0">
        <img
          src={recipe.image}
          className="shadow-md h-40 w-40 object-cover rounded-md"
          alt="recipe-img"
        />
      </div>
      <div className=" flex-col justify-around">
        <h3 className="text-2xl text-darkGreen font-bold mb-2">
          {recipe.title}
        </h3>
        <div className="flex gap-2 items-center mt-2">
          <img
            src={chillGrillLogo}
            className="w-8 h-8 rounded-full border border-darkGreen"
          />
          <span className="font-bold text-xs text-lightGreen">
            The ChillGrill
          </span>
        </div>
      </div>

      {/* duration badge */}
      <div className="absolute top-4 right-4 p-4 flex justify-center items-center bg-darkGreen rounded-xl">
        <span className="text-gray text-sm">Click for details</span>
      </div>
    </Link>
  );
};

export default RecipeCard;
