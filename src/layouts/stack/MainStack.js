import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import TabBar from "../navigator/TabBar";
import Register from "../../components/screen/Register";
import SearchScreen from "../../components/screen/SearchScreen";
import BookMarksScreen from "../../components/screen/BookMarksScreen";

const MainStack = createStackNavigator();

function Main() {
  const [screen, setScreen] = React.useState(false);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName={screen ? "Register" : "TabBar"}
        screenOptions={{
          headerShown: false,
          // ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <MainStack.Screen name="Register" component={Register} />
        <MainStack.Screen name="TabBar" component={TabBar} />
        <MainStack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            title: "Search",
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
        <MainStack.Screen
          name="BookMarksScreen"
          component={BookMarksScreen}
          options={{
            title: "Bookmarks",
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
