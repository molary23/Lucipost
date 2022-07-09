import * as React from "react";
import { categoriesRequest } from "./categories-request";

export const CategoryContext = React.createContext();

export const CategoryContextProvider = ({ children }) => {
  const [cat, setCat] = React.useState([]),
    [error, setError] = React.useState(null),
    [isLoading, setIsLoading] = React.useState(false),
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

  return (
    <CategoryContext.Provider value={{ cat, error, isLoading }}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContextProvider;
