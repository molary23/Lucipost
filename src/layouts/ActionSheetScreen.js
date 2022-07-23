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
    minHeight = "20%";
    listItem = (
      <>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddCategoryScreen", {
              add: "Categories",
            })
          }
        >
          <List.Item title="Categories" titleStyle={{ textAlign: "center" }} />
        </TouchableOpacity>
        <Divider />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddCategoryScreen", { add: "Tags" })
          }
        >
          <List.Item title="Tags" titleStyle={{ textAlign: "center" }} />
        </TouchableOpacity>
      </>
    );
  }

  return (
    <ASView>
      <ASContent style={{ height: minHeight }}>
        <AddCategoryTopDraw></AddCategoryTopDraw>
        <ASTitle>
          <ContentParagraph>Choose an Option</ContentParagraph>
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
