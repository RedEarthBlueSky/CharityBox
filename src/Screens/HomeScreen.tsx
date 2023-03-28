import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import { HeaderComponent, Stories, StoriesAutoScroll } from '../Components/organisms'
import { styles } from '../Styles'

const HomeScreen:React.FC = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderComponent />
      {/* <Stories /> */}
      < StoriesAutoScroll />
      <Text style={styles.H1}>Home Screen</Text>
    </SafeAreaView>
  )
}

export { HomeScreen }