import * as React from "react";

import { FlatList } from "react-native";

import { MainView, ContentView } from "../../styles/all";

import Searchbar from "../../layouts/SearchBar";
import SearchScreen from "./SearchScreen";
import PostCard from "../../layouts/PostCard";
import MyHeader from "../../layouts/MyHeader";

const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];

const Item = ({ title }) => <PostCard title={title} />;

function HomeScreen({ navigation }) {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <MainView>
      <MyHeader title="Recent Stories" />
      <ContentView>
        <Searchbar
          placeholder="Search Post"
          icon="magnify"
          onFocus={() =>
            navigation.navigate(SearchScreen, {
              screen: "SearchScreen",
            })
          }
          sender={"HomeScreen"}
        />
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ContentView>
    </MainView>
  );
}

export default HomeScreen;
