import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

import Home from "../components/Home";
import Settings from "../components/Settings";
import Trending from "../components/Trending";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "ios-home-outline",
  Trending: "trending-up",
  Settings: "settings",
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

function NavBar() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: "Recent Stories",
            tabBarLabel: "Home",
          }}
        />
        <Tab.Screen
          name="Trending"
          component={Trending}
          options={{ title: "Trending Stories" }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavBar;
