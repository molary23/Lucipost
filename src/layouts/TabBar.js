import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../components/HomeScreen";
import SettingScreen from "../components/SettingScreen";
import TrendingScreen from "../components/TrendingScreen";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  HomeScreen: "ios-home-outline",
  TrendingScreen: "trending-up",
  SettingScreen: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),

    tabBarActiveTintColor: "#5ea1ed",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

function TabBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Recent Stories",
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="TrendingScreen"
          component={TrendingScreen}
          options={{ title: "Trending Stories" }}
        />
        <Tab.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ title: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default TabBar;
