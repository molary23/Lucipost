import * as React from "react";
import { WebView } from "react-native-webview";
import Toast from "react-native-root-toast";

import { MainView, ContentView } from "../../styles/all";

import MyHeader from "../../layouts/MyHeader";

class WebKitScreen extends React.Component {
  state = {
    URL: "https://www.lucipost.com/",
    POST_URL: "",
    back: "",
    title: "Lucipost",
  };
  componentDidMount() {
    const { type, url } = this.props.route.params;

    if (type === "post") {
      this.setState({
        POST_URL: `${this.state.URL}?p=${url}`,
      });
    } else {
      this.setState({
        POST_URL: this.state.URL + url,
      });
    }
  }

  handleMessage = (message) => {
    this.setState({
      title: message.nativeEvent.data,
    });
  };

  render() {
    const { POST_URL, title } = this.state;
    const { route, navigation } = this.props;
    return (
      <MainView>
        <MyHeader
          title={title}
          onPressBack={() => navigation.navigate(route.params.sender)}
          back={true}
          secondIcon="dots-vertical"
          onSecondIconPress={() => console.log("More Here")}
        />
        <ContentView>
          <WebView
            source={{ uri: POST_URL }}
            injectedJavaScript="window.ReactNativeWebView.postMessage(document.title)"
            onMessage={this.handleMessage}
          />
        </ContentView>
      </MainView>
    );
  }
}
export default WebKitScreen;
