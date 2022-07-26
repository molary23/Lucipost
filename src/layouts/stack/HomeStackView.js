import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import SearchScreen from "../../components/screen/SearchScreen";
import HomeScreen from "../../components/screen/HomeScreen";
import WebKitScreen from "../../components/screen/WebKitScreen";
import OptionSheetScreen from "../OptionSheetScreen";

const HomeStack = createStackNavigator();

export default function HomeStackView() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
        <HomeStack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ ...TransitionPresets.DefaultTransition }}
        />
        <HomeStack.Screen
          name="WebKitScreen"
          component={WebKitScreen}
          options={{
            ...TransitionPresets.ModalSlideFromBottomIOS,
          }}
        />
      </HomeStack.Group>
      <HomeStack.Group
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          cardOverlayEnabled: true,
          presentation: "transparentModal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <HomeStack.Screen
          name="OptionSheetScreen"
          component={OptionSheetScreen}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
}
