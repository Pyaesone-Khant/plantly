import { Stack } from 'expo-router'
import React from 'react'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='onboarding'
        options={{
          presentation: "modal",
          headerShown: false,
          animation: "fade"
        }}
      />
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false,
          animation: "fade"
        }}
      />
      <Stack.Screen
        name="new"
        options={{
          title: "New Plant",
          presentation: "modal",
          animation: "slide_from_bottom"
        }}
      />
    </Stack>
  )
}