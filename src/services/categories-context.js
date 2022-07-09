import * as React from "react";
import { categoriesRequest } from "./categories-request";

import { storeData, loadData } from "../utils/storage";

export const CategoryContext = React.createContext();

export const CategoryContextProvider = ({ children }) => {
  const [cat, setCat] = React.useState([]),
    [error, setError] = React.useState(null),
    [isLoading, setIsLoading] = React.useState(false),
    [favouriteCategory, setFavouriteCategory] = React.useState([]),
    executedRef = React.useRef(false);

  const pullCategories = () => {
    setIsLoading(true);

    categoriesRequest()
      .then((results) => {
        setIsLoading(false);
        setCat(results);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  React.useEffect(() => {
    if (executedRef.current) {
      return;
    }
    pullCategories();
    executedRef.current = true;
  }, []);

  const add = (category) => {
    const fave = [...favouriteCategory, category];
    setFavouriteCategory(fave);
  };

  const remove = (category) => {
    const newFave = favouriteCategory.filter((f) => f !== category);
    setFavouriteCategory(newFave);
  };

  React.useEffect(() => {
    storeData(favouriteCategory, "@category");
    console.log(favouriteCategory);
  }, [favouriteCategory]);

  React.useEffect(() => {
    const loadedFave = loadData("@category");
    if (loadedFave.length > 0) {
      setFavouriteCategory(loadedFave);
    }
  }, []);

  return (
    <CategoryContext.Provider
      value={{
        cat,
        addFavouriteCategory: add,
        favouriteCategory,
        removeFavouriteCategory: remove,
        error,
        isLoading,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
