import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const PersonaliseStack = createStackNavigator();

import CategoryContextProvider from "../../services/categories-context";
import TagContextProvider from "../../services/tags-context";

import TrendingScreen from "../../components/screen/TrendingScreen";
import CategoryScreen from "../../components/screen/CategoryScreen";
import AddCategoryScreen from "../../components/screen/AddCategoryScreen";

function PersonaliseStackView() {
  return (
    <CategoryContextProvider>
      <TagContextProvider>
        <PersonaliseStack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <PersonaliseStack.Group
            screenOptions={{
              ...TransitionPresets.SlideFromRightIOS,
            }}
          >
            <PersonaliseStack.Screen
              name="TrendingScreen"
              component={TrendingScreen}
            />

            <PersonaliseStack.Screen
              name="CategoryScreen"
              component={CategoryScreen}
            />
          </PersonaliseStack.Group>
          <PersonaliseStack.Group
            screenOptions={{
              gestureEnabled: true,
              cardOverlayEnabled: true,
              presentation: "modal",
            }}
          >
            <PersonaliseStack.Screen
              name="AddCategoryScreen"
              component={AddCategoryScreen}
            />
          </PersonaliseStack.Group>
        </PersonaliseStack.Navigator>
      </TagContextProvider>
    </CategoryContextProvider>
  );
}

export default PersonaliseStackView;
