import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

const NotificationStack = createStackNavigator();

import NotificationScreen from "../../components/screen/NotificationScreen";
import CategoryScreen from "../../components/screen/CategoryScreen";

function NotificationStackView() {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <NotificationStack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
      />

      <NotificationStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
      />
    </NotificationStack.Navigator>
  );
}

export default NotificationStackView;
