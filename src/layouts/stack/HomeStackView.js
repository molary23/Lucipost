import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
} from "@react-navigation/stack";
import SearchScreen from "../../components/screen/SearchScreen";
import HomeScreen from "../../components/screen/HomeScreen";

const HomeStack = createStackNavigator();

export default function HomeStackView() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.DefaultTransition,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="SearchScreen" component={SearchScreen} />
    </HomeStack.Navigator>
  );
}
