import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import Searchbar from "../../layouts/SearchBar";

import { ContentView, MainView } from "../../styles/all";

function SearchScreen({ navigation, route }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeText = (query) => setSearchQuery(query);
  const { sender } = route.params;

  let searching;
  if (sender === "HomeScreen") {
    searching = "all post";
  } else if (sender === "BookmarksScreen") {
    searching = "bookmarks";
  }
  return (
    <MainView>
      <ContentView>
        <Searchbar
          placeholder={`Search ${searching}...`}
          icon="keyboard-backspace"
          onIconPress={() => navigation.goBack()}
          value={searchQuery}
          onChangeText={onChangeText}
          sender="SearchScreen"
        />
        <Text>This is the Search {searching} Page</Text>
      </ContentView>
    </MainView>
  );
}

export default SearchScreen;
