import * as React from "react";
import PropTypes from "prop-types";

import { FlatList, Text } from "react-native";

import { MainView, ContentView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function TrendMoreScreen({ navigation: { navigate }, route }) {
  const { sender, data } = route.params;
  return (
    <MainView>
      <MyHeader
        title={`Top 10 ${sender} Posts`}
        onPressBack={() => navigate("TrendingScreen")}
        back={true}
      />
      <ContentView></ContentView>
    </MainView>
  );
}

export default TrendMoreScreen;
