import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/AppNavigator'

export default function App() {
  return (
      <NavigationContainer>
          <StatusBar style="auto" />
          <AppNavigator />
      </NavigationContainer>
  );
}
