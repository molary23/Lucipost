import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import { ContentView, MainView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function PersonaliseScreen({ navigation: { navigate } }) {
  return (
    <MainView>
      <MyHeader
        title="For You"
        second={true}
        secondIcon="tune"
        onSecondIconPress={() => navigate("CategoryScreen")}
      />
      <ContentView>
        <Text>This is the Personalise Page</Text>
      </ContentView>
    </MainView>
  );
}

export default PersonaliseScreen;
