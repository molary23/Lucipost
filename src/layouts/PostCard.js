import * as React from "react";
import { Card } from "react-native-paper";

import { TouchableOpacity, Platform } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import { PostContext } from "../services/post-context";

import {
  ContentCard,
  ContentCardActions,
  ContentCardButton,
  PostCardTitle,
  PostCardContent,
} from "../styles/all";

function PostCard({ content, openURL }) {
  const { addFavouritePost, removeFavouritePost, favouritePost } =
    React.useContext(PostContext);

  const isFave = favouritePost.find((p) => p.id === content.item.id);
  return (
    <ContentCard>
      <Card>
        <TouchableOpacity onPress={openURL}>
          <Card.Cover source={{ uri: "" }} />
          <Card.Content>
            <PostCardTitle>
              {content.item.title.length > 50
                ? `${content.item.title.substring(0, 50)}...`
                : content.item.title}
            </PostCardTitle>
            <PostCardContent>
              {content.item.body.length > 100
                ? `${content.item.body.substring(0, 100)}...`
                : content.item.body}
            </PostCardContent>
          </Card.Content>
        </TouchableOpacity>
        <Card.Actions>
          <ContentCardActions>
            <ContentCardButton
              style={{ alignItems: "flex-start" }}
              onPress={() => console.log("first")}
            >
              {Platform.OS === "android" ? (
                <AntDesign name="sharealt" size={24} color="black" />
              ) : (
                <Ionicons name="share-outline" size={24} color="black" />
              )}
            </ContentCardButton>
            <ContentCardButton
              style={{ alignItems: "center" }}
              onPress={openURL}
            >
              <Ionicons name="open-outline" size={24} color="black" />
            </ContentCardButton>
            <ContentCardButton
              style={{ alignItems: "flex-end" }}
              onPress={() =>
                isFave
                  ? removeFavouritePost(content.item)
                  : addFavouritePost(content.item)
              }
            >
              <Ionicons
                name={isFave ? "md-bookmarks" : "md-bookmarks-outline"}
                size={24}
                color="black"
              />
            </ContentCardButton>
          </ContentCardActions>
        </Card.Actions>
      </Card>
    </ContentCard>
  );
}

export default PostCard;
