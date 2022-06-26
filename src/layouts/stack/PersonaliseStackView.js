import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";

const PersonaliseStack = createStackNavigator();

import PersonaliseScreen from "../../components/screen/PersonaliseScreen";
import CategoryScreen from "../../components/screen/CategoryScreen";

function PersonaliseStackView() {
  return (
    <PersonaliseStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      }}
    >
      <PersonaliseStack.Screen
        name="PersonaliseScreen"
        component={PersonaliseScreen}
      />

      <PersonaliseStack.Screen
        name="CategoryScreen"
        component={CategoryScreen}
      />
    </PersonaliseStack.Navigator>
  );
}

export default PersonaliseStackView;
