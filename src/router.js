import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./navigator/AppNavigator";
import Screens from "./screens";

const RootStack = createStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName="SplashScreen">
        <RootStack.Screen
          name="SplashScreen"
          component={Screens.SplashScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="HomeScreen"
          component={AppNavigator}
          options={{ headerShown: false }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
