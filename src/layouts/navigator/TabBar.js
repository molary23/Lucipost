import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../../components/screen/HomeScreen";
import MoreScreen from "../../components/screen/MoreScreen";
import TrendingScreen from "../../components/screen/TrendingScreen";

const Tab = createBottomTabNavigator();

function TabBar() {
  const TAB_ICON = {
    HomeScreen: "ios-home-outline",
    TrendingScreen: "trending-up",
    MoreScreen: "list-outline",
  };

  const createScreenOptions = ({ route }) => {
    const iconName = TAB_ICON[route.name];
    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),

      tabBarActiveTintColor: "#5ea1ed",
      tabBarInactiveTintColor: "gray",
      headerShown: false,
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    };
  };

  return (
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
        name="MoreScreen"
        component={MoreScreen}
        options={{ title: "More" }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
