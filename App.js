import * as React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components/native";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/themes";

import Main from "./src/layouts/Main";

const SafeArea = styled(SafeAreaView)`
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  flex: 1;
`;

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
          <Main />
        </SafeAreaView>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}