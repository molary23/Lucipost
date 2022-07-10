import * as React from "react";
import { WebView } from "react-native-webview";

import { MainView, ContentView } from "../../styles/all";

import MyHeader from "../../layouts/MyHeader";

function WebKitScreen({ navigation: { navigate }, route }) {
  const type = route.params.type,
    sender = route.params.sender,
    URL = "https://www.lucipost.com/";

  let POST_URL, back;
  if (type === "post") {
    POST_URL = `${URL}?p=${route.params.url}`;
  } else {
    POST_URL = URL + route.params.url;
  }

  return (
    <MainView>
      <MyHeader
        title="Lucipost"
        onPressBack={() => navigate(sender)}
        back={true}
        secondIcon="dots-vertical"
        onSecondIconPress={() => console.log("More Here")}
      />
      <ContentView>
        <WebView source={{ uri: POST_URL }} />
      </ContentView>
    </MainView>
  );
}

export default WebKitScreen;
