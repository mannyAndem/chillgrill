import useFetch from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Tags from "./Tags";

const DashboardHome = () => {
  // spoonacular url

  // useFetch hook
  const [getData, data, error, loading] = useFetch();

  // state to track currently active tag
  const [activeTag, setActiveTag] = useState({
    id: 1,
    name: "african",
  });

  // useEffect to fetch data when component mounts and each time the active tag state changes
  useEffect(() => {
    let url = null;
    if (activeTag.id == 1) {
      url =
        "https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=c2a71c51256b4458a9c2e4475fef333b";
    } else {
      url = `https://api.spoonacular.com/recipes/complexSearch?query=${activeTag.name}&apiKey=c2a71c51256b4458a9c2e4475fef333b`;
    }
    getData(url);
  }, [activeTag]);

  data && console.log(data);
  error && console.error(error);
  return (
    <div className="px-8 py-2">
      <div className="mb-8 items-center flex justify-between">
        <h1 className="text-3xl text-darkGreen font-bold">The ChillGrill</h1>
        <input
          type="search"
          placeholder="Search recipes"
          className="search w-3/5 bg-transparent shadow-sm py-2 pl-12 pr-4 border-lightGreen border-2 rounded-md focus:outline-none text-darkGreen focus:border-darkGreen"
        />
      </div>
      <Tags activeTag={activeTag} setActiveTag={setActiveTag} />
      <div className="flex flex-col gap-8">
        {loading && <Spinner size={200} color="darkGreen" />}
        {data &&
          data.results &&
          data.results.map((result) => (
            <RecipeCard key={result.id} recipe={result} />
          ))}
        {data &&
          data.recipes &&
          data.recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        {error && (
          <p className="text-3xl text-red-500 font-bold">An error occurred</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
