import React from "react";
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
      />
      <ContentView>
        <Text>This is the categroy Page</Text>
      </ContentView>
    </MainView>
  );
}

export default CategoryScreen;
