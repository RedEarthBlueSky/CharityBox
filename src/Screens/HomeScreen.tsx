import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'

import { HeaderComponent } from '../Components'
import { styles } from '../Styles/styles'

const HomeScreen:React.FC = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderComponent />
      <Text style={styles.H1}>Home Screen</Text>
    </SafeAreaView>
  )
}

export { HomeScreen }