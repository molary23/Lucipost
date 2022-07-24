import * as React from "react";
import { ScrollView, Platform } from "react-native";
import { List } from "react-native-paper";

import { ContentView, MainView } from "../../styles/all";
import ListItem from "../../layouts/ListItem";
import MyHeader from "../../layouts/MyHeader";

function MoreScreen({ navigation: { navigate } }) {
  const isAndroid = Platform.OS === "android";
  return (
    <MainView>
      <MyHeader title="More" back={false} first={false} second={false} />
      <ContentView>
        <ScrollView>
          <List.Section>
            <List.Subheader>Some title</List.Subheader>
            <ListItem
              title="Notifications"
              color={"yellow"}
              leftIcon="bell-circle-outline"
              onPress={() =>
                navigate("ActionSheetScreen", {
                  sender: "More",
                })
              }
            />
            <ListItem
              title="About Lucipost"
              color={"blue"}
              leftIcon="information-outline"
              onPress={() =>
                navigate("WebKitScreen", {
                  url: "about-us",
                  type: "page",
                  sender: "MoreScreen",
                })
              }
            />
            <ListItem
              title="About App"
              color={"blue"}
              leftIcon={isAndroid ? "android" : "apple"}
            />
            <ListItem
              title="Privacy Policy"
              color={"blue"}
              leftIcon="script-text-outline"
              onPress={() =>
                navigate("WebKitScreen", {
                  url: "privacy-policy",
                  type: "page",
                  sender: "MoreScreen",
                })
              }
            />
            <ListItem
              title="Advertisments"
              color={"blue"}
              leftIcon="advertisements"
              onPress={() =>
                navigate("WebKitScreen", {
                  url: "advertise",
                  type: "page",
                  sender: "MoreScreen",
                })
              }
            />
            <ListItem
              title="Bookmarks"
              color={"black"}
              leftIcon="bookmark-multiple-outline"
              onPress={() =>
                navigate("BookMarksScreen", {
                  name: "Hello from Here",
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
