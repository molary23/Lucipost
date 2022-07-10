import * as React from "react";
import { CategoryContext } from "../services/categories-context";

import ListItem from "./ListItem";

function FavouriteCategory({ category }) {
  const { addFavouriteCategory, favouriteCategory, removeFavouriteCategory } =
    React.useContext(CategoryContext);

  const isFave = favouriteCategory.find((c) => c === category.id);
  return (
    <ListItem
      title={category.name}
      color={"black"}
      rightIcon={
        isFave ? "check-circle-outline" : "checkbox-blank-circle-outline"
      }
      onPress={() =>
        isFave
          ? removeFavouriteCategory(category.id)
          : addFavouriteCategory(category.id)
      }
    />
  );
}

export default FavouriteCategory;
