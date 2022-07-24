import * as React from "react";
import PropTypes from "prop-types";

import { FlatList, Text } from "react-native";

import { MainView, ContentView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

function TrendMoreScreen({ navigation: { navigate }, route }) {
  const { sender, data } = route.params;
  return (
    <MainView>
      <ContentView></ContentView>
    </MainView>
  );
}

export default TrendMoreScreen;
