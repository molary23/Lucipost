import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import MoreScreen from "../../components/screen/MoreScreen";
import TrendingScreen from "../../components/screen/TrendingScreen";
import HomeStackView from "../stack/HomeStackView";
import MoreStackView from "../stack/MoreStackView";

const Tab = createBottomTabNavigator();

function TabBar() {
  const TAB_ICON = {
    HomeStackView: "ios-home-outline",
    TrendingScreen: "trending-up",
    MoreStackView: "list-outline",
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
        name="HomeStackView"
        component={HomeStackView}
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
        name="MoreStackView"
        component={MoreStackView}
        options={{ title: "More" }}
      />
    </Tab.Navigator>
  );
}

export default TabBar;
