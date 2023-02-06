import { View, Text } from 'react-native'
import React from 'react'
import styles from "../styles/globalstyles"
import { BenefactorInformationMenu } from '../data/helperdata'

const BenefactorMenu = BenefactorInformationMenu.map(MenuItem => {
  const { index, name, component } = MenuItem
  return (
    <View key={index}>
      <Text style={styles.H3}> {index}: {name}</Text>
      <Text>Component: {component}</Text>
    </View>
  )
})

const BenefactorInformationScreen = () => {
  return (
    <View>
      <Text style={styles.H1Bold}>Benefactor Information</Text>
      {BenefactorMenu}
    </View>
  )
}

export { BenefactorInformationScreen }