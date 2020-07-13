import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme } from "../theme/types";
import Screens from "../screens";
import HomeIcon from "../../assets/icons/BottomNav/HomeIcon";
import MenuIcon from "../../assets/icons/BottomNav/MenuIcon";
import { IconContainer } from "./styles";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavigator() {
  const { colors } = theme;

  return (
    <Tab.Navigator
      activeColor={colors.DARK_TEXT}
      inactiveColor={colors.DARK_GRAY}
      barStyle={{ backgroundColor: colors.COLOR_WHITE, height: 80 }}
      initialRouteName="HomeScreen"
      labeled={false}
    >
      <Tab.Screen
        name="HomeScreen"
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <HomeIcon fillColor={color} isFocused={focused} />
            </IconContainer>
          ),
        }}
      />

      <Tab.Screen
        name="MenuScreen"
        component={Screens.MenuScreen}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <IconContainer>
              <MenuIcon fillColor={color} isFocused={focused} />
            </IconContainer>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
