import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const HomeScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Charity Box</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  H1: {
    fontSize: 32,
  },
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})