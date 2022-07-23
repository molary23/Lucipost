import * as React from "react";
import { CategoryContext } from "../services/categories-context";
import { TagContext } from "../services/tags-context";

import { Divider } from "react-native-paper";

import ListItem from "./ListItem";

function FavouriteCategory({ category, add }) {
  const { addFavouriteCategory, favouriteCategory, removeFavouriteCategory } =
    React.useContext(CategoryContext);
  const { addFavouriteTag, favouriteTag, removeFavouriteTag } =
    React.useContext(TagContext);

  if (add === "Categories") {
    const isFaveCat = favouriteCategory.find((c) => c.id === category.id);
    return (
      <>
        <ListItem
          title={category.name}
          color={"black"}
          rightIcon={
            isFaveCat ? "check-circle-outline" : "checkbox-blank-circle-outline"
          }
          onPress={() =>
            isFaveCat
              ? removeFavouriteCategory(category)
              : addFavouriteCategory(category)
          }
        />
        <Divider />
      </>
    );
  } else {
    const isFaveTag = favouriteTag.find((c) => c.id === category.id);
    return (
      <>
        <ListItem
          title={category.name}
          color={"black"}
          rightIcon={
            isFaveTag ? "check-circle-outline" : "checkbox-blank-circle-outline"
          }
          onPress={() =>
            isFaveTag ? removeFavouriteTag(category) : addFavouriteTag(category)
          }
        />
        <Divider />
      </>
    );
  }
}

export default FavouriteCategory;
