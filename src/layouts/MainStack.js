import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabBar from "./navigator/TabBar";
import Register from "../components/screen/Register";
import SearchScreen from "../components/screen/SearchScreen";
import WebKitScreen from "../components/screen/WebKitScreen";

const MainStack = createNativeStackNavigator();

function Main() {
  const [screen, setScreen] = React.useState(false);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={screen ? "Register" : "TabBar"}
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="TabBar" component={TabBar} />
        <MainStack.Screen name="SearchScreen" component={SearchScreen} />
        <MainStack.Screen name="WebKitScreen" component={WebKitScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
