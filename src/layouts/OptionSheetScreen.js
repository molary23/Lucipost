import React from "react";
import { TouchableOpacity } from "react-native";

import { PostContext } from "../services/post-context";
import { onShare } from "../utils/share";

import { Divider, List } from "react-native-paper";
import {
  OPView,
  AddCategoryTopDraw,
  OPContent,
  ContentParagraph,
  ASTitle,
} from "../styles/all";

function OptionSheetScreen({ navigation, route }) {
  const { sender } = route.params;

  let listItem, minHeight;
  if (sender === "Notifications") {
    minHeight = "25%";
    listItem = (
      <>
        <TouchableOpacity onPress={() => console.log("daily")}>
          <List.Item
            title="Daily (Recommended)"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => console.log("Hourly")}>
          <List.Item
            title="Hourly"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => console.log("30 mins")}>
          <List.Item
            title="30 Minutes"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
      </>
    );
  } else if (sender === "Display") {
    minHeight = "30%";
    listItem = (
      <>
        <TouchableOpacity onPress={() => console.log("Light")}>
          <List.Item
            title="Light (Recommended)"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => console.log("Dark")}>
          <List.Item
            title="Dark"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => console.log("Auto")}>
          <List.Item
            title="Auto"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity onPress={() => console.log("System ")}>
          <List.Item
            title="System "
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
      </>
    );
  } else if (sender === "Webkit") {
    const { data } = route.params,
      { addFavouritePost, removeFavouritePost, favouritePost } =
        React.useContext(PostContext),
      isFave = favouritePost.find((p) => p.id === data.id);
    minHeight = "25%";
    listItem = (
      <>
        <TouchableOpacity onPress={() => console.log("Open in Browser")}>
          <List.Item
            title="Open in Browser"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() =>
            isFave ? removeFavouritePost(data) : addFavouritePost(data)
          }
        >
          <List.Item
            title={isFave ? "Remove from Bookmarks" : "Save to App Bookmark"}
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() => onShare(`https://www.lucipost.com/?p=${data.id}`)}
        >
          <List.Item
            title="Share"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
      </>
    );
  }

  return (
    <OPView>
      <OPContent style={{ height: minHeight }}>
        <AddCategoryTopDraw></AddCategoryTopDraw>
        <ASTitle>
          <ContentParagraph
            style={{
              textAlign: "center",
            }}
          >
            Choose an Option
          </ContentParagraph>
        </ASTitle>

        <Divider />
        {listItem}
      </OPContent>
    </OPView>
  );
}

export default OptionSheetScreen;
