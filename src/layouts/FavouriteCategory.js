import * as React from "react";
import { CategoryContext } from "../services/categories-context";

import ListItem from "./ListItem";

function FavouriteCategory({ category }) {
  const {
    cat,
    isLoading,
    error,
    addFavouriteCategory,
    favouriteCategory,
    removeFavouriteCategory,
  } = React.useContext(CategoryContext);

  const isFave = favouriteCategory.find((c) => c === category);
  return (
    <ListItem
      title={category}
      color={"black"}
      icon={isFave ? "check-circle-outline" : "checkbox-blank-circle-outline"}
      onPress={() =>
        isFave
          ? removeFavouriteCategory(category)
          : addFavouriteCategory(category)
      }
    />
  );
}

export default FavouriteCategory;
