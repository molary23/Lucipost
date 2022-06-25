import * as React from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { ContentView, MainView } from "../../styles/all";
import ListItem from "../../layouts/ListItem";
import MyHeader from "../../layouts/MyHeader";
import BookMarksScreen from "./BookMarksScreen";

function MoreScreen({ navigation }) {
  return (
    <MainView>
      <MyHeader title="More" />
      <ContentView>
        <ScrollView>
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            <ListItem title="Notifications" color={"yellow"} icon="folder" />
            <ListItem title="About" color={"blue"} icon="information-outline" />
            <ListItem
              title="Bookmarks"
              color={"black"}
              icon="bookmark-multiple-outline"
              onPress={() =>
                navigation.navigate(BookMarksScreen, {
                  screen: "BookMarksScreen",
                })
              }
            />
          </List.Section>
        </ScrollView>
      </ContentView>
    </MainView>
  );
}

export default MoreScreen;
