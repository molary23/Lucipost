import * as React from "react";

import { CategoryContext } from "../../services/categories-context";
import { TagContext } from "../../services/tags-context";

import { ScrollView, TouchableOpacity } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Chip } from "react-native-paper";

import {
  ContentView,
  MainView,
  CategoryHeader,
  CategoryView,
  CategoryBox,
  CategoryBoxView,
  CategoryListItem,
} from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";
import Loader from "../../layouts/Loader";

function CategoryScreen({ navigation }) {
  const { favouriteCategory, isLoadingCat, removeFavouriteCategory } =
    React.useContext(CategoryContext);
  const { favouriteTag, isLoadingTag, removeFavouriteTag } =
    React.useContext(TagContext);

  console.log("category", favouriteCategory);
  console.log("tag", favouriteTag);
  return (
    <MainView>
      <MyHeader
        title="Categories"
        back={true}
        onPressBack={() => navigation.goBack()}
        secondIcon="dots-vertical"
        onSecondIconPress={() =>
          navigation.navigate("ActionSheetScreen", { sender: "Category" })
        }
      />
      <ContentView>
        <ScrollView>
          <CategoryBox>
            <CategoryView>
              <CategoryHeader>Categories</CategoryHeader>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AddCategoryScreen", {
                    add: "Categories",
                  })
                }
              >
                <MaterialCommunityIcons
                  name="plus-box-multiple"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </CategoryView>
            {isLoadingCat ? (
              <Loader />
            ) : (
              <CategoryBoxView>
                {favouriteCategory.map((item, i) => {
                  return (
                    <CategoryListItem
                      mode="outlined"
                      closeIcon="close"
                      onClose={() => removeFavouriteCategory(item)}
                      key={i}
                    >
                      {item.name}
                    </CategoryListItem>
                  );
                })}
              </CategoryBoxView>
            )}
          </CategoryBox>
          <CategoryBox>
            <CategoryView>
              <CategoryHeader>Tags</CategoryHeader>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("AddCategoryScreen", { add: "Tags" })
                }
              >
                <MaterialCommunityIcons
                  name="tag-plus-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </CategoryView>
            {isLoadingTag ? (
              <Loader />
            ) : (
              <CategoryBoxView>
                {favouriteTag.map((item, i) => {
                  return (
                    <CategoryListItem
                      mode="outlined"
                      closeIcon="close"
                      onClose={() => removeFavouriteTag(item)}
                      key={i}
                    >
                      {item.name}
                    </CategoryListItem>
                  );
                })}
              </CategoryBoxView>
            )}
          </CategoryBox>
        </ScrollView>
      </ContentView>
    </MainView>
  );
}

export default CategoryScreen;
