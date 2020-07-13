import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Screens from "../screens";

const AppStack = createStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{ headerShown: false }}
    >
      <AppStack.Screen name="HomeScreen" component={Screens.HomeScreen} />
      <AppStack.Screen name="CommitScreen" component={Screens.CommitScreen} />
    </AppStack.Navigator>
  );
}
