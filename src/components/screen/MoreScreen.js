import * as React from "react";
import { ScrollView, Platform, View } from "react-native";
import { Divider, Card } from "react-native-paper";

import { ContentView, MainView, MoreView } from "../../styles/all";
import ListItem from "../../layouts/ListItem";
import MyHeader from "../../layouts/MyHeader";

import { theme } from "../../styles/themes";

function MoreScreen({ navigation: { navigate } }) {
  const isAndroid = Platform.OS === "android";
  return (
    <MainView>
      <MyHeader title="More" back={false} first={false} second={false} />
      <ContentView>
        <ScrollView>
          <MoreView style={{ marginBottom: 10 }}>
            <ListItem
              title="Notifications"
              color={theme.color[3]}
              leftIcon="bell-circle-outline"
              onPress={() =>
                navigate("ActionSheetScreen", {
                  sender: "More",
                })
              }
            />
            <Divider />
            <ListItem
              title="Display"
              color={"#aaa"}
              leftIcon="lightbulb-outline"
              onPress={() =>
                navigate("ActionSheetScreen", {
                  sender: "More",
                })
              }
            />
          </MoreView>

          <MoreView style={{ marginBottom: 10 }}>
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
            <Divider />
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
            <Divider />
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
            <Divider />
            <ListItem
              title="About App"
              color={"blue"}
              leftIcon={isAndroid ? "android" : "apple"}
            />
          </MoreView>

          <MoreView style={{ marginBottom: 10 }}>
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
          </MoreView>
        </ScrollView>
      </ContentView>
    </MainView>
  );
}

export default MoreScreen;
