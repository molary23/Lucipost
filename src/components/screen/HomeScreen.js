import * as React from "react";
import { Text } from "react-native";

import { MainView } from "../../styles/all";

import Searchbar from "../../layouts/SearchBar";

function HomeScreen() {
  return (
    <MainView>
      <Searchbar />
      <Text>This is the Home Page</Text>
    </MainView>
  );
}

export default HomeScreen;
