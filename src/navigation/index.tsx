import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./tabs";

const MainNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default MainNavigation;
