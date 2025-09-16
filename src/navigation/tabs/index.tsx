import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../screens";
import { theme } from "../../theme";

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray[500],
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopColor: theme.colors.gray[200],
          paddingBottom: 8,
          paddingTop: 8,
          height: 60,
        },
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTintColor: theme.colors.primary,
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          title: "Home",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
