import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BenefactorScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Benefactor Screen</Text>
      <Text>
        You are an individual, group, team, company or even 
        another charity who wants to make a gift donation.
      </Text> 
      <Text>Yes this describes me</Text>
      <Text>Perhaps not please take me back to the main screen</Text>
    </View>
  )
}

export default BenefactorScreen

const styles = StyleSheet.create({
  H1: {
    fontSize: 32,
  },
  H1Bold: {
    fontSize: 32,
    fontWeight: 'bold',
  }
})