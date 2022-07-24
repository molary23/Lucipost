import React from "react";
import { TouchableOpacity } from "react-native";

import { Divider, List } from "react-native-paper";
import {
  ASView,
  AddCategoryTopDraw,
  ASContent,
  ASClose,
  ContentParagraph,
  ASTitle,
} from "../styles/all";

function ActionSheetScreen({ navigation, route }) {
  const { sender } = route.params;
  let listItem, minHeight;
  if (sender === "Category") {
    minHeight = "22.5%";
    listItem = (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddCategoryScreen", {
              add: "Categories",
            })
          }
        >
          <List.Item
            title="Update Categories"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddCategoryScreen", { add: "Tags" })
          }
        >
          <List.Item
            title="Update Tags"
            titleStyle={{ textAlign: "center", color: "blue" }}
          />
        </TouchableOpacity>
      </>
    );
  } else if (sender === "More") {
    minHeight = "30%";
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
  }

  return (
    <ASView>
      <ASContent style={{ height: minHeight }}>
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
      </ASContent>
      <ASClose>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <List.Item
            title="Cancel"
            titleStyle={{ textAlign: "center", color: "tomato" }}
          />
        </TouchableOpacity>
      </ASClose>
    </ASView>
  );
}

export default ActionSheetScreen;
