import useFetch from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { useContext, useEffect, useState } from "react";
import Spinner from "./Spinner";
import Tags from "./Tags";
import Search from "./Search";
import { FavouritesContext } from "../contexts/FavouritesContext";

const DashboardHome = () => {
  // spoonacular url

  // state to hold search value inputed by the user
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${searchValue}&apiKey=c2a71c51256b4458a9c2e4475fef333b`;
    getData(url);
  };

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

  const { favourites } = useContext(FavouritesContext);

  return (
    <div className="px-8 py-2">
      <div className="mb-8 items-center flex justify-between">
        <h1 className="hidden lg:block text-3xl text-darkGreen font-bold">
          The ChillGrill
        </h1>
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleSubmit={handleSubmit}
        />
      </div>
      <Tags activeTag={activeTag} setActiveTag={setActiveTag} />
      <div className="flex flex-col gap-8">
        {loading && (
          <Spinner
            options={{ size: 164, color: "darkGreen", position: "fixed" }}
          />
        )}
        {data &&
          data.results &&
          data.results.map((result) => {
            return favourites.find((item) => item.id == result.id) ? (
              <RecipeCard
                key={result.id}
                recipe={result}
                addedToFavourites={true}
              />
            ) : (
              <RecipeCard
                key={result.id}
                recipe={result}
                addedToFavourites={false}
              />
            );
          })}
        {data &&
          data.recipes &&
          data.recipes.map((recipe) => {
            return favourites.find((item) => item.id == recipe.id) ? (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                addedToFavourites={true}
              />
            ) : (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                addedToFavourites={false}
              />
            );
          })}
        {error && (
          <p className="text-3xl text-red-500 font-bold">An error occurred</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;
