import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";
import { RootSiblingParent } from "react-native-root-siblings";

import PostContextProvider from "./src/services/post-context";
import CategoryContextProvider from "./src/services/categories-context";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/themes";

import Main from "./src/layouts/stack/MainStack";

const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

export default function App() {
  return (
    <RootSiblingParent>
      <ThemeProvider theme={theme}>
        <PostContextProvider>
          <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <Main />
          </SafeAreaView>
        </PostContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </RootSiblingParent>
  );
}
