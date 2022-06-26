import * as React from "react";
import { Card } from "react-native-paper";
import { Platform } from "react-native";
import { TouchableOpacity } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  ContentCard,
  ContentCardActions,
  ContentCardButton,
  PostCardTitle,
  PostCardContent,
} from "../styles/all";

function PostCard({ content, openURL }) {
  return (
    <ContentCard>
      <Card>
        <TouchableOpacity onPress={openURL}>
          <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
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
              style={{ alignItems: "flex-end" }}
              onPress={() => console.log("second")}
            >
              <Ionicons name="md-bookmarks-outline" size={24} color="black" />
            </ContentCardButton>
          </ContentCardActions>
        </Card.Actions>
      </Card>
    </ContentCard>
  );
}

export default PostCard;
