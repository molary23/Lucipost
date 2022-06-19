import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TabBar from "./navigator/TabBar";
import Register from "../components/screen/Register";

const MainStack = createNativeStackNavigator();

function Main() {
  const [screen, setScreen] = React.useState(true);

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
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
