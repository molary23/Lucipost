import * as React from "react";

import { ScrollView, TouchableOpacity } from "react-native";
import { List, Divider } from "react-native-paper";

import { CategoryContext } from "../../services/categories-context";
import { TagContext } from "../../services/tags-context";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import FavouriteCategory from "../../layouts/FavouriteCategory";

import {
  AddCategoryView,
  AddCategoryTopDraw,
  AddCategoryContent,
  CategoryView,
  CategoryHeader,
} from "../../styles/all";
import Loader from "../../layouts/Loader";

function AddCategoryScreen({ route, navigation }) {
  const { cat, isLoadingCat, favouriteCategory } =
      React.useContext(CategoryContext),
    { tag, isLoadingTag, favouriteTag } = React.useContext(TagContext),
    [defaultTag, setDefaultTag] = React.useState(favouriteTag),
    [defaultCategory, setDefaultCategory] = React.useState(favouriteCategory),
    { add } = route.params;

  let defaultAdd;

  const saveTag = () => {
    if (add === "Categories") {
      if (defaultCategory.length !== favouriteCategory.length) {
        // Save to category
      } else {
      }
    } else if (add === "Tags") {
      if (defaultTag.length !== favouriteTag.length) {
        // Save to Tag
      } else {
      }
      console.log(defaultTag);
    }
    navigation.navigate("CategoryScreen");
  };

  React.useEffect(() => {
    console.log(defaultAdd);
  }, []);

  React.useEffect(() => {
    console.log(favouriteCategory);
    console.log("default", defaultAdd);
  }, [favouriteCategory]);

  if (add === "Categories") {
    return (
      <AddCategoryView>
        <AddCategoryContent>
          <AddCategoryTopDraw></AddCategoryTopDraw>

          {isLoadingCat ? (
            <Loader />
          ) : (
            <ScrollView>
              <List.Section>
                <CategoryView style={{ padding: "10px" }}>
                  <CategoryHeader>{add}</CategoryHeader>
                  <TouchableOpacity onPress={saveTag}>
                    <MaterialCommunityIcons
                      name="check"
                      size={24}
                      color="black"
                      style={{}}
                    />
                  </TouchableOpacity>
                </CategoryView>
                <Divider />
                {cat.map((item, i) => {
                  return (
                    <FavouriteCategory category={item} key={i} add={add} />
                  );
                })}
              </List.Section>
            </ScrollView>
          )}
        </AddCategoryContent>
      </AddCategoryView>
    );
  } else {
    return (
      <AddCategoryView>
        <AddCategoryContent>
          <AddCategoryTopDraw></AddCategoryTopDraw>

          {isLoadingTag ? (
            <Loader />
          ) : (
            <ScrollView>
              <List.Section>
                <CategoryView style={{ padding: "10px" }}>
                  <CategoryHeader>{add}</CategoryHeader>
                  <TouchableOpacity onPress={saveTag}>
                    <MaterialCommunityIcons
                      name="check"
                      size={24}
                      color="black"
                      style={{ textAlign: "right" }}
                    />
                  </TouchableOpacity>
                </CategoryView>
                <Divider />
                {tag.map((item, i) => {
                  return (
                    <FavouriteCategory category={item} key={i} add={add} />
                  );
                })}
              </List.Section>
            </ScrollView>
          )}
        </AddCategoryContent>
      </AddCategoryView>
    );
  }
}

export default AddCategoryScreen;
