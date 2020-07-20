import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Recipes } from "../screens/recipes/Recipes";
import { Fermentables } from '../screens/fermentables/Fermentables';
import { Fermentable } from '../models/fermentable';
import { FermentablesForm } from '../screens/fermentables/FermentablesForm';


// For typings on screens we need to know all routes so we can navigate properly
// Key is route name (should be visible also in AppNavigator body)
// Value is an object with params you want to supply or undefined when no params.
export type RootStackParamList = {
  Recipes: undefined;
  Fermentables: undefined;
  FermentablesForm: { fermentable?: Fermentable}
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
      <Stack.Navigator screenOptions={({route}) => ({
        headerShown: route.name !== 'Recipes',
        headerTitle: ({children}) => <Text>{children + 'henk'}</Text>
      })}>
        <Stack.Screen name="Recipes" component={Recipes} options={{title: 'Recepten'}} />
        <Stack.Screen name="Fermentables" component={Fermentables} options={{title: 'Vergistbare'}} />
        <Stack.Screen name="FermentablesForm" component={FermentablesForm} options={{title: 'Vergistbare Formulier'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
