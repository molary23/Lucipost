import React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import BookMarksScreen from "../../components/screen/BookMarksScreen";
import MoreScreen from "../../components/screen/MoreScreen";
import SearchScreen from "../../components/screen/SearchScreen";
import WebKitScreen from "../../components/screen/WebKitScreen";

const MoreStack = createStackNavigator();

function MoreStackView() {
  return (
    <MoreStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <MoreStack.Screen name="MoreScreen" component={MoreScreen} />

      <MoreStack.Screen name="BookMarksScreen" component={BookMarksScreen} />
      <MoreStack.Screen name="SearchScreen" component={SearchScreen} />
      <MoreStack.Screen name="WebKitScreen" component={WebKitScreen} />
    </MoreStack.Navigator>
  );
}

export default MoreStackView;
