import * as React from "react";
import { Text } from "react-native";

import { MainView } from "../../styles/all";

import Searchbar from "../../layouts/SearchBar";
import SearchScreen from "./SearchScreen";

function HomeScreen({ navigation }) {
  return (
    <MainView>
      <Searchbar
        placeholder="Search Post"
        icon="magnify"
        onFocus={() =>
          navigation.navigate(SearchScreen, {
            screen: "SearchScreen",
            params: {
              user: "anything_string_or_object",
            },
          })
        }
        sender={"HomeScreen"}
      />
      <Text>This is the Home Page</Text>
    </MainView>
  );
}

export default HomeScreen;
