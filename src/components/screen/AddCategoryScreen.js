import * as React from "react";

import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { CategoryContext } from "../../services/categories-context";
import { TagContext } from "../../services/tags-context";

import ListItem from "../../layouts/ListItem";

import FavouriteCategory from "../../layouts/FavouriteCategory";

import { MainView, ContentView } from "../../styles/all";
import Loader from "../../layouts/Loader";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

function AddCategoryScreen({ route }) {
  const { cat, isLoadingCat } = React.useContext(CategoryContext);
  const { tag, isLoadingTag } = React.useContext(TagContext);
  const { add } = route.params;

  if (add === "Categories") {
    return (
      <MainView>
        <ContentView>
          {isLoadingCat ? (
            <Loader />
          ) : (
            <ScrollView>
              <List.Section>
                <List.Subheader>{add}</List.Subheader>
                {cat.map((item, i) => {
                  return (
                    <FavouriteCategory category={item} key={i} add={add} />
                  );
                })}
              </List.Section>
            </ScrollView>
          )}
        </ContentView>
      </MainView>
    );
  } else {
    return (
      <MainView>
        <ContentView>
          {isLoadingTag ? (
            <Loader />
          ) : (
            <ScrollView>
              <List.Section>
                <List.Subheader>{add}</List.Subheader>
                {tag.map((item, i) => {
                  return (
                    <FavouriteCategory category={item} key={i} add={add} />
                  );
                })}
              </List.Section>
            </ScrollView>
          )}
        </ContentView>
      </MainView>
    );
  }
}

export default AddCategoryScreen;
