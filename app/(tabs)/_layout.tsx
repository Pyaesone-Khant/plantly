import { useUserStore } from "@/stores/userStore";
import { theme } from "@/theme";
import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { Link, Redirect, Tabs } from "expo-router";
import React from "react";
import { Pressable } from "react-native";

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
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => (
            <Link
              href={"/new"}
              asChild
            >
              <Pressable
                style={{
                  marginRight: 16
                }}
                hitSlop={16}
              >
                <AntDesign name="pluscircleo" size={24} color={theme.colorGreen} />
              </Pressable>
            </Link>
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
