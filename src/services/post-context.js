import * as React from "react";
import { postRequest } from "./post-request";

import { storeData, loadData } from "../utils/storage";

export const PostContext = React.createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = React.useState([]),
    [error, setError] = React.useState(null),
    [favouritePost, setFavouritePost] = React.useState([]),
    [isLoading, setIsLoading] = React.useState(false),
    executedRef = React.useRef(false);

  const pullPost = () => {
    setIsLoading(true);
    setTimeout(() => {
      postRequest()
        .then((results) => {
          setIsLoading(false);
          setPosts(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  const add = (post) => {
    const fave = [...favouritePost, post];
    setFavouritePost(fave);
  };

  const remove = (post) => {
    const newFave = favouritePost.filter((f) => f !== post);
    setFavouritePost(newFave);
  };

  React.useEffect(() => {
    storeData(favouritePost, "@post");
    console.log(favouritePost);
  }, [favouritePost]);

  React.useEffect(() => {
    const loadedFave = loadData("@post");
    if (loadedFave.length > 0) {
      setFavouritePost(loadedFave);
    }
  }, []);

  React.useEffect(() => {
    if (executedRef.current) {
      return;
    }
    pullPost();
    executedRef.current = true;
  }, []);

  return (
    <PostContext.Provider
      value={{
        posts,
        error,
        addFavouritePost: add,
        removeFavouritePost: remove,
        favouritePost,
        isLoading,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
