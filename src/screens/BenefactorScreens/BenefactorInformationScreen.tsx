import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import styles from "../styles/globalstyles"
import { BenefactorInformationMenu } from '../data/helperdata'
import themeContext from '../styles/themeContext'

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
  const theme = useContext(themeContext)
  return (
    <View style={[styles.container,{backgroundColor: theme.background }]}>
      <Text style={[styles.H1Bold,{ color: theme.color }]}>
        Benefactor Information
      </Text>
      {BenefactorMenu}
    </View>
  )
}

export { BenefactorInformationScreen }