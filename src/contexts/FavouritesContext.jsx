import { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState(
    localStorage.getItem("favourites") || []
  );

  const addToFavourites = (recipe) => {
    setFavourites((prevState) => {
      let newState = [...prevState];
      newState.push(recipe);
      localStorage.setItem("favourites", newState);
      return newState;
    });
  };
  const removeFromFavourites = (recipe) => {
    setFavourites((prevState) => {
      let newState = prevState.filter((item) => item.id != recipe.id);
      localStorage.setItem("favourites", newState);
      return newState;
    });
  };

  const updateFavourites = (recipe) => {
    if (favourites.find((item) => item.id == recipe.id)) {
      removeFromFavourites(recipe);
    } else {
      addToFavourites(recipe);
    }
  };

  return (
    <FavouritesContext.Provider value={{ favourites, updateFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
