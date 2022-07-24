import React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

import BookMarksScreen from "../../components/screen/BookMarksScreen";
import MoreScreen from "../../components/screen/MoreScreen";
import SearchScreen from "../../components/screen/SearchScreen";
import WebKitScreen from "../../components/screen/WebKitScreen";
import ActionSheetScreen from "../ActionSheetScreen";

const MoreStack = createStackNavigator();

function MoreStackView() {
  return (
    <MoreStack.Navigator>
      <MoreStack.Group
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <MoreStack.Screen name="MoreScreen" component={MoreScreen} />

        <MoreStack.Screen name="BookMarksScreen" component={BookMarksScreen} />
        <MoreStack.Screen name="SearchScreen" component={SearchScreen} />
        <MoreStack.Screen name="WebKitScreen" component={WebKitScreen} />
      </MoreStack.Group>
      <MoreStack.Group
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          cardOverlayEnabled: true,
          presentation: "transparentModal",
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <MoreStack.Screen
          name="ActionSheetScreen"
          component={ActionSheetScreen}
        />
      </MoreStack.Group>
    </MoreStack.Navigator>
  );
}

export default MoreStackView;
