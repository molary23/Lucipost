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
import TrendMoreScreen from "../../components/screen/TrendMoreScreen";
import ActionSheetScreen from "../ActionSheetScreen";

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
              presentation: "transparentModal",
            }}
          >
            <PersonaliseStack.Screen
              name="AddCategoryScreen"
              component={AddCategoryScreen}
            />
            <PersonaliseStack.Screen
              name="ActionSheetScreen"
              component={ActionSheetScreen}
            />
          </PersonaliseStack.Group>
          <PersonaliseStack.Group
            screenOptions={{
              cardStyleInterpolator:
                CardStyleInterpolators.forModalPresentationIOS,
            }}
          >
            <PersonaliseStack.Screen
              name="TrendMoreScreen"
              component={TrendMoreScreen}
            />
          </PersonaliseStack.Group>
        </PersonaliseStack.Navigator>
      </TagContextProvider>
    </CategoryContextProvider>
  );
}

export default PersonaliseStackView;
