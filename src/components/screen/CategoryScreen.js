import * as React from "react";

import { CategoryContext } from "../../services/categories-context";

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { ContentView, MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function CategoryScreen({ navigation }) {
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
        <Text>This is the categroy Page</Text>
      </ContentView>
    </MainView>
  );
}

export default CategoryScreen;
