import * as React from "react";
import { postRequest } from "./post-request";

export const PostContext = React.createContext();

function PostContextProvider({ children }) {
  const [posts, setPosts] = React.useState([]),
    [error, setError] = React.useState(null),
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

  React.useEffect(() => {
    if (executedRef.current) {
      return;
    }
    pullPost();
    executedRef.current = true;
  }, []);

  return (
    <PostContext.Provider value={{ posts, error, isLoading }}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContextProvider;
