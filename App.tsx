import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/Styles/styles'
import { HomeScreen } from './src/Screens';
import React from 'react';

export default function App() {
  //  Doubts about this method and not using navigation
  return (
    <>
      <HomeScreen />
    </>
  );
}
