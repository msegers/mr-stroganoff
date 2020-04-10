import React from 'react';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Recipes } from "../screens/recipes/Recipes";
import { Fermentables } from '../screens/fermentables/Fermentables';


// For typings on screens we need to know all routes so we can navigate properly
// Key is route name (should be visible also in AppNavigator body)
// Value is an object with params you want to supply or undefined when no params.
type RootStackParamList = {
  Recipes: undefined;
  Fermentables: undefined;
};

// generic interface of generic interface which now only requires the RouteName in the typing
export interface ScreenNavigationProp<RouteName extends keyof RootStackParamList> extends StackNavigationProp<
  RootStackParamList,
  RouteName
>{};

const Stack = createStackNavigator();
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="Fermentables" component={Fermentables} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
