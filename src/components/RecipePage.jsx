import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const RecipePage = () => {
  const { id } = useParams();
  const url = `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=c2a71c51256b4458a9c2e4475fef333b`;
  const [getData, recipe, error, loading] = useFetch(url);

  useEffect(() => {
    getData();
  }, []);
  return (
    recipe && (
      <div className="text-darkGreen">
        <img
          src={recipe.image}
          className="mb-16 w-full h-60 object-cover rounded-lg shadow-lg"
        />
        <h1 className="text-4xl font-bold">{recipe.title}</h1>
        <p
          className="my-16"
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
        <div className="mt-16">
          <h2 className="text-2xl">Ingredients You'll Need</h2>
          <ul className="mt-8 pl-8 flex flex-col gap-4">
            {recipe.extendedIngredients.map((ingredient) => (
              <li className="capitalize font-semibold">
                {ingredient.original}
              </li>
            ))}
          </ul>
          <h2 className="mt-16 text-3xl font-bold">How to Prepare</h2>
          <ol>
            {recipe.analyzedInstructions[0].steps.map((step) => {
              return (
                <li className="my-4">
                  {recipe.analyzedInstructions[0].steps.indexOf(step) + 1}.{" "}
                  {step.step}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    )
  );
};

export default RecipePage;
