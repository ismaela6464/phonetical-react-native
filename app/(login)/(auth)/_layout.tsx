import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function AuthLayout() {
  const colorScheme = useColorScheme();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "log-in" : "log-in-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="register"
        options={{
          title: "Register",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person-add" : "person-add-outline"}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
