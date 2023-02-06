import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AppNavigator from './navigation/AppNavigator'

// import styles from './src/Screens/styles/globalstyles'

export default function App() {
  return (
    <View>
      <NavigationContainer>
        <StatusBar style="auto" />
        <AppNavigator />
      </NavigationContainer>
    </View>
  );
}
