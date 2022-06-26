import * as React from "react";

import { FlatList } from "react-native";

import { PostContext } from "../../services/post-context";

import { MainView, ContentView } from "../../styles/all";

import Searchbar from "../../layouts/SearchBar";
import PostCard from "../../layouts/PostCard";
import MyHeader from "../../layouts/MyHeader";
import Loader from "../../layouts/Loader";

function HomeScreen({ navigation: { navigate } }) {
  const { posts, isLoading, error } = React.useContext(PostContext);
  return (
    <MainView>
      <MyHeader title="Recent Stories" />
      <ContentView>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Searchbar
              placeholder="Search Post"
              icon="magnify"
              onFocus={() =>
                navigate("SearchScreen", {
                  sender: "HomeScreen",
                })
              }
              sender={"HomeScreen"}
            />
            <FlatList
              data={posts}
              renderItem={(item) => (
                <PostCard
                  content={item}
                  openURL={() => {
                    navigate("WebKitScreen", {
                      url: item.item.id,
                    });
                  }}
                />
              )}
              keyExtractor={(item) => item.id}
            />
          </>
        )}
      </ContentView>
    </MainView>
  );
}

export default HomeScreen;
