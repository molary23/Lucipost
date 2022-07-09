import * as React from "react";

import {
  TransitionPresets,
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";

const PersonaliseStack = createStackNavigator();

import CategoryContextProvider from "../../services/categories-context";

import TrendingScreen from "../../components/screen/TrendingScreen";
import CategoryScreen from "../../components/screen/CategoryScreen";
import AddCategoryScreen from "../../components/screen/AddCategoryScreen";

function PersonaliseStackView() {
  return (
    <CategoryContextProvider>
      <PersonaliseStack.Navigator
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.ModalSlideFromBottomIOS,
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

        <PersonaliseStack.Screen
          name="AddCategoryScreen"
          component={AddCategoryScreen}
          options={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        />
      </PersonaliseStack.Navigator>
    </CategoryContextProvider>
  );
}

export default PersonaliseStackView;
