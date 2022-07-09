import * as React from "react";

import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CategoryContext } from "../../services/categories-context";

import ListItem from "../../layouts/ListItem";

import FavouriteCategory from "../../layouts/FavouriteCategory";

import { MainView, ContentView } from "../../styles/all";
import Loader from "../../layouts/Loader";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

function AddCategoryScreen() {
  const { cat, isLoading, error, addFavouriteCategory, favouriteCategory } =
    React.useContext(CategoryContext);

  return (
    <MainView>
      {isLoading ? (
        <Loader />
      ) : (
        <ContentView>
          <ScrollView>
            <List.Section>
              <List.Subheader>Categories</List.Subheader>
              {cat.map((item, i) => {
                return <FavouriteCategory category={item} key={i} />;
              })}
            </List.Section>
          </ScrollView>
        </ContentView>
      )}
    </MainView>
  );
}

export default AddCategoryScreen;
