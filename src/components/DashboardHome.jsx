import useFetch from "../hooks/useFetch";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const DashboardHome = () => {
  const url =
    "https://api.spoonacular.com/recipes/random?number=10&tags=vegetarian,dessert&apiKey=c2a71c51256b4458a9c2e4475fef333b";

  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-RapidAPI-Key": "79a8c192d5msh586578a67252c79p1ff04fjsn3a14d9dd1a76",
  //     "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  //   },
  // };
  const [getData, data, error, loading] = useFetch(url);

  useEffect(() => {
    getData();
  }, []);
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
      <div className="flex flex-col gap-8">
        {data &&
          data.recipes.map((recipe) => {
            console.log(recipe);
            return <RecipeCard key={recipe.id} recipe={recipe} />;
          })}
        {loading && <Spinner size={200} color="darkGreen" />}
        {error && (
          <p className="text-3xl text-red-500 font-bold">An error occurred</p>
        )}
      </div>
    </div>
  );
};

export default DashboardHome;

// {recipes: Array(1)}recipes: Array(1)0: aggregateLikes: 2analyzedInstructions: Array(1)0: {name: '', steps: Array(10)}name: ""steps: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {number: 1, step: 'In a medium saucepan, bring 1 1/2 cups water to a boil.', ingredients: Array(1), equipment: Array(1)}1: {number: 2, step: 'Add rice, salt and stir.', ingredients: Array(2), equipment: Array(0)}2: {number: 3, step: 'Simmer covered until water has been absorbed (approximately 15 minutes).', ingredients: Array(1), equipment: Array(0), length: {…}}3: {number: 4, step: 'In another sauce pan, stir in 1 1/2 milk, sugar, and 1 1/2 cups cooked rice, cook over medium heat', ingredients: Array(4), equipment: Array(1)}4: {number: 5, step: 'Stir constantly until thick and creamy, for 15 to 20 minutes.', ingredients: Array(0), equipment: Array(0), length: {…}}5: {number: 6, step: 'Combine 1/2 cup milk, and beaten egg, then add to saucepan. Cook 2 minutes more, stirring constantly', ingredients: Array(2), equipment: Array(1), length: {…}}6: {number: 7, step: 'Remove from heat,', ingredients: Array(0), equipment: Array(0)}7: {number: 8, step: 'Add in butter, and vanilla.', ingredients: Array(2), equipment: Array(0)}8: {number: 9, step: 'Season with a pinch of nutmeg or cinnamon.', ingredients: Array(2), equipment: Array(0)}9: {number: 10, step: 'Serve warm.', ingredients: Array(0), equipment: Array(0)}length: 10[[Prototype]]: Array(0)[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)cheap: falsecookingMinutes: -1creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit"cuisines: []length: 0[[Prototype]]: Array(0)dairyFree: falsediets: (2) ['gluten free', 'lacto ovo vegetarian']0: "gluten free"1: "lacto ovo vegetarian"length: 2[[Prototype]]: Array(0)dishTypes: ['dessert']0: "dessert"length: 1[[Prototype]]: Array(0)extendedIngredients: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {id: 10120052, aisle: 'Pasta and Rice', image: 'uncooked-white-rice.png', consistency: 'SOLID', name: 'short grain rice', …}1: {id: 14412, aisle: 'Beverages', image: 'water.png', consistency: 'LIQUID', name: 'water', …}2: {id: 2047, aisle: 'Spices and Seasonings', image: 'salt.jpg', consistency: 'SOLID', name: 'salt', …}3: {id: 1011077, aisle: 'Milk, Eggs, Other Dairy', image: 'milk.png', consistency: 'LIQUID', name: 'milk', …}4: {id: 19335, aisle: 'Baking', image: 'sugar-in-bowl.png', consistency: 'SOLID', name: 'sugar', …}5: {id: 1052050, aisle: 'Baking', image: 'vanilla.jpg', consistency: 'SOLID', name: 'vanilla', …}6: {id: 1123, aisle: 'Milk, Eggs, Other Dairy', image: 'egg.png', consistency: 'SOLID', name: 'egg', …}7: {id: 1001, aisle: 'Milk, Eggs, Other Dairy', image: 'butter-sliced.jpg', consistency: 'SOLID', name: 'butter', …}8: {id: 2010, aisle: 'Spices and Seasonings', image: 'cinnamon.jpg', consistency: 'SOLID', name: 'cinnamon', …}9: {id: 2025, aisle: 'Spices and Seasonings', image: 'ground-nutmeg.jpg', consistency: 'SOLID', name: 'nutmeg', …}length: 10[[Prototype]]: Array(0)gaps: "no"glutenFree: truehealthScore: 6id: 658276image: "https://spoonacular.com/recipeImages/658276-556x370.jpg"imageType: "jpg"instructions: "In a medium saucepan, bring 1 1/2 cups water to a boil. Add rice, salt and stir.\nSimmer covered until water has been absorbed (approximately 15 minutes).\nIn another sauce pan, stir in 1 1/2 milk, sugar, and 1 1/2 cups cooked rice, cook over medium heat\nStir constantly until thick and creamy, for 15 to 20 minutes.\nCombine 1/2 cup milk, and beaten egg, then add to saucepan. Cook 2 minutes more, stirring constantly\nRemove from heat, Add in butter, and vanilla.\nSeason with a pinch of nutmeg or cinnamon.\nServe warm."license: "CC BY 3.0"lowFodmap: falseoccasions: []originalId: nullpreparationMinutes: -1pricePerServing: 61.47readyInMinutes: 45servings: 4sourceName: "Foodista"sourceUrl: "https://www.foodista.com/recipe/C75THTG5/rice-pudding"spoonacularSourceUrl: "https://spoonacular.com/rice-pudding-658276"summary: "Rice Pudding might be just the dessert you are searching for. One portion of this dish contains approximately <b>12g of protein</b>, <b>10g of fat</b>, and a total of <b>404 calories</b>. For <b>61 cents per serving</b>, this recipe <b>covers 14%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. 2 people were glad they tried this recipe. It is brought to you by Foodista. If you have butter, cinnamon, egg, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 39%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/left-over-rice-make-rice-pudding-1308821\">Left over rice? Make Rice pudding</a>, <a href=\"https://spoonacular.com/recipes/left-over-rice-make-rice-pudding-532769\">Left over rice? Make Rice pudding</a>, and <a href=\"https://spoonacular.com/recipes/rice-kheer-rice-pudding-600368\">Rice Kheer (Rice Pudding)</a> for similar recipes."sustainable: falsetitle: "Rice Pudding"vegan: falsevegetarian: trueveryHealthy: falseveryPopular: falseweightWatcherSmartPoints: 17[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)[[Prototype]]: Object
