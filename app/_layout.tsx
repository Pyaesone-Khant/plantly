import { Stack } from 'expo-router'
import React from 'react'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name='onboarding'
        options={{
          presentation: "modal",
          headerShown: false
        }}
      />
      <Stack.Screen
        name='(tabs)'
        options={{
          headerShown: false
        }}
      />
    </Stack>
  )
}