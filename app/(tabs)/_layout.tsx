import { useUserStore } from "@/stores/userStore";
import { theme } from "@/theme";
import { Entypo, Feather } from "@expo/vector-icons";
import { Redirect, Tabs } from "expo-router";
import React from "react";

export default function RootLayout() {

  const hasFinishedOnboarding = useUserStore(state => state.hasFinishedOnboarding)

  if (!hasFinishedOnboarding) {
    return (
      <Redirect href={"/onboarding"} />
    )
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 600
        },
        tabBarStyle: {
          height: 84,
          paddingTop: 8
        }
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}
