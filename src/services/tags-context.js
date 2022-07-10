import * as React from "react";
import { tagsRequest } from "./tags-request";

import { storeData, loadData } from "../utils/storage";

export const TagContext = React.createContext();

export const TagContextProvider = ({ children }) => {
  const [tag, setTag] = React.useState([]),
    [error, setError] = React.useState(null),
    [isLoadingTag, setIsLoadingTag] = React.useState(false),
    [favouriteTag, setFavouriteTag] = React.useState([]),
    executedRef = React.useRef(false);

  const pullTags = () => {
    setIsLoadingTag(true);

    tagsRequest()
      .then((results) => {
        setIsLoadingTag(false);
        setTag(results);
      })
      .catch((err) => {
        setIsLoadingTag(false);
        setError(err);
      });
  };

  React.useEffect(() => {
    if (executedRef.current) {
      return;
    }
    pullTags();
    executedRef.current = true;
  }, []);

  const add = (tag) => {
    const fave = [...favouriteTag, tag];
    setFavouriteTag(fave);
  };

  const remove = (tag) => {
    const newFave = favouriteTag.filter((f) => f !== tag);
    setFavouriteTag(newFave);
  };

  React.useEffect(() => {
    storeData(favouriteTag, "@tag");
    console.log(favouriteTag);
  }, [favouriteTag]);

  React.useEffect(() => {
    const loadedFave = loadData("@tag");
    if (loadedFave.length > 0) {
      setFavouriteTag(loadedFave);
    }
  }, []);

  return (
    <TagContext.Provider
      value={{
        tag,
        addFavouriteTag: add,
        favouriteTag,
        removeFavouriteTag: remove,
        error,
        isLoadingTag,
      }}
    >
      {children}
    </TagContext.Provider>
  );
};

export default TagContextProvider;
