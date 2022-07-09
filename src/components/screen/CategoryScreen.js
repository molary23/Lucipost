import * as React from "react";

import { CategoryContext } from "../../services/categories-context";

import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { ContentView, MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function CategoryScreen({ navigation }) {
  const { cat } = React.useContext(CategoryContext);

  console.log(cat);
  return (
    <MainView>
      <MyHeader
        title="Categories"
        back={true}
        onPressBack={() => navigation.goBack()}
        second={true}
        secondIcon="plus-box-multiple"
        onSecondIconPress={() => navigation.navigate("AddCategoryScreen")}
      />
      <ContentView>
        <Text>This is the categroy Page</Text>
      </ContentView>
    </MainView>
  );
}

export default CategoryScreen;
