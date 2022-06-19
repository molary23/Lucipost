import * as React from "react";
import { Button, Card, Title, Paragraph } from "react-native-paper";
import { Platform } from "react-native";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  ContentCard,
  ContentCardActions,
  ContentCardButton,
} from "../styles/all";

function PostCard({ title }) {
  return (
    <ContentCard>
      <Card>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
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
