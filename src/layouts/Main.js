import * as React from "react";
import { View, Text } from "react-native";

import { MainView } from "../styles/all";

import TabBar from "./TabBar";
import Register from "../components/Register";

function Main() {
  const [screen, setScreen] = React.useState(false);

  return <MainView>{screen ? <TabBar /> : <Register />}</MainView>;
}

export default Main;
