import * as React from "react";
import { WebView } from "react-native-webview";

import { MainView, ContentView } from "../../styles/all";

import MyHeader from "../../layouts/MyHeader";

function WebKitScreen({ navigation: { navigate }, route }) {
  const URL = `https://www.lucipost.com/?p=${route.params.url}`;
  return (
    <MainView>
      <MyHeader
        title="Lucipost"
        onPressBack={() => navigate("HomeScreen")}
        back={true}
        first={false}
        second={true}
        secondIcon="dots-vertical"
        onSecondIconPress={() => console.log("More Here")}
      />
      <ContentView>
        <WebView source={{ uri: URL }} />
      </ContentView>
    </MainView>
  );
}

export default WebKitScreen;
