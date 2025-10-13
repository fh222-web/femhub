import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, NotificationScreen, ResourceScreen, ShopScreen, BuyerProfileScreen } from "../../screens";
import { theme } from "../../theme";

const Tab = createBottomTabNavigator();

// !! Header Style -- Height needs to be adjusted to device dimensions (60 keeps it just under my iPhone 16 front camera)

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
          height: 90,
        },
        headerStyle: {
          backgroundColor: theme.colors.status,
          height: 60,
        },
        headerTintColor: theme.colors.black,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          title: "",
        }}
      />
      <Tab.Screen
        name="Resource"
        component={ResourceScreen}
        options={{
          tabBarLabel: "Resource",
          title: "",
        }}
        />
      <Tab.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          tabBarLabel: "Shop",
          title: "",
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarLabel: "Notifications",
          title: "",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={BuyerProfileScreen}
        options={{
          tabBarLabel: "Profile",
          title: "",
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
