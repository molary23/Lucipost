import * as React from "react";

import { FlatList } from "react-native";

import { PostContext } from "../../services/post-context";

import { MainView, ContentView } from "../../styles/all";

import Searchbar from "../../layouts/SearchBar";
import PostCard from "../../layouts/PostCard";
import MyHeader from "../../layouts/MyHeader";
import Loader from "../../layouts/Loader";

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
  const { posts, isLoading, error } = React.useContext(PostContext);

  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <MainView>
      <MyHeader title="Recent Stories" />
      <ContentView>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {" "}
            <Searchbar
              placeholder="Search Post"
              icon="magnify"
              onFocus={() =>
                navigation.navigate("SearchScreen", {
                  sender: "HomeScreen",
                })
              }
              sender={"HomeScreen"}
            />
            <FlatList
              data={posts}
              renderItem={(item) => <PostCard content={item} />}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </ContentView>
    </MainView>
  );
}

export default HomeScreen;
