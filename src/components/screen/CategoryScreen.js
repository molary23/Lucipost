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
  CategoryHeaderView,
  CategoryHeader,
  CategoryView,
  CategoryBox,
} from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function CategoryScreen({ navigation }) {
  const { favouriteCategory, isLoadingCat } = React.useContext(CategoryContext);
  const { favouriteTag, isLoadingTag } = React.useContext(TagContext);

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

            {favouriteCategory.map((item, i) => {
              return <Text key={i}>{item.name}</Text>;
            })}
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

            {favouriteTag.map((item, i) => {
              return <Text key={i}>{item.name}</Text>;
            })}
          </CategoryBox>
        </ScrollView>
      </ContentView>
    </MainView>
  );
}

export default CategoryScreen;
