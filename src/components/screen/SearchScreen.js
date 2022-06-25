import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

import Searchbar from "../../layouts/SearchBar";

import { ContentView, MainView } from "../../styles/all";

function SearchScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeText = (query) => setSearchQuery(query);

  return (
    <MainView>
      <ContentView>
        <Searchbar
          placeholder="Search Post..."
          icon="keyboard-backspace"
          onIconPress={() => navigation.goBack()}
          value={searchQuery}
          onChangeText={onChangeText}
          sender="SearchScreen"
        />
        <Text>This is the Search Post Page</Text>
      </ContentView>
    </MainView>
  );
}

export default SearchScreen;
