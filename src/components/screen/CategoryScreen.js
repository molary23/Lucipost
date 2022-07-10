import * as React from "react";

import { CategoryContext } from "../../services/categories-context";
import { TagContext } from "../../services/tags-context";

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ScrollView } from "react-native";

import {
  ContentView,
  MainView,
  BorderedView,
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
        secondIcon="tag-plus-outline"
        onSecondIconPress={() =>
          navigation.navigate("AddCategoryScreen", { add: "Tags" })
        }
        firstIcon="plus-box-multiple"
        onFirstIconPress={() =>
          navigation.navigate("AddCategoryScreen", { add: "Categories" })
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
                    <BorderedView key={i}>
                      <CategoryListItem>{item.name}</CategoryListItem>
                      <TouchableOpacity
                        onPress={() => removeFavouriteCategory(item)}
                      >
                        <MaterialCommunityIcons
                          name="close"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    </BorderedView>
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
                    <BorderedView key={i}>
                      <CategoryListItem>{item.name}</CategoryListItem>
                      <TouchableOpacity
                        onPress={() => removeFavouriteTag(item)}
                      >
                        <MaterialCommunityIcons
                          name="close"
                          size={24}
                          color="black"
                        />
                      </TouchableOpacity>
                    </BorderedView>
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
