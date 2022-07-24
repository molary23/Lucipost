import * as React from "react";
import PropTypes from "prop-types";

import { FlatList, Text } from "react-native";

import { MainView, ContentView } from "../../styles/all";
import MyHeader from "../../layouts/MyHeader";

import PostCard from "../../layouts/PostCard";
import { PostContext } from "../../services/post-context";

export const BookMarksScreen = ({ navigation: { navigate }, route }) => {
  const { favouritePost } = React.useContext(PostContext);

  return (
    <MainView>
      <MyHeader
        title="Bookmarks"
        onPressBack={() =>
          navigate("MoreScreen", {
            name: "Hello from Here",
          })
        }
        back={true}
        secondIcon="magnify"
        onSecondIconPress={() =>
          navigate("SearchScreen", {
            sender: "BookmarksScreen",
          })
        }
      />
      <ContentView>
        {favouritePost.length <= 0 ? (
          <Text>You have not bookmarked any post.</Text>
        ) : (
          <FlatList
            data={favouritePost}
            renderItem={(item) => (
              <PostCard
                content={item}
                openURL={() => {
                  navigate("WebKitScreen", {
                    url: item.item.id,
                    type: "post",
                    sender: "BookmarksScreen",
                  });
                }}
              />
            )}
            keyExtractor={(item) => item.id}
          />
        )}
      </ContentView>
    </MainView>
  );
};

BookMarksScreen.propTypes = {};

export default BookMarksScreen;
