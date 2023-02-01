import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CauseScreen: React.FC = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Cause Screen</Text>
      <Text>
        You are a Charity, group, team, company
        who wishes to accept gift donations.
      </Text>
      <Text>Yes this describes me</Text>
      <Text>Perhaps not please take me back to the main screen</Text>
    </View>
  )
}

export default CauseScreen

const styles = StyleSheet.create({
  H1: {
    fontSize: 32,
  },
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})