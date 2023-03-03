import { View, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import styles from "../../Styles/globalstyles"
import { BenefactorInformationMenu } from '../data/helperdata'
import themeContext from '../../Styles/themeContext'

const BenefactorMenu = BenefactorInformationMenu.map((MenuItem, index) => {
  const { name, component, additional } = MenuItem
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.H3Bold}>{name}</Text>
      <Text style={styles.H4Bold}>Component: {component}</Text>
      <Text style={styles.H4}>{additional}</Text>
    </View>
  )
})

const BenefactorInformationScreen = () => {
  const theme = useContext(themeContext)
  return (
    <View style={[styles.container,{backgroundColor: theme.background }]}>
      <Text style={[styles.H1Bold,{ color: theme.color }]}>
        Benefactors
      </Text>
      <ScrollView>
        {BenefactorMenu}
      </ScrollView>
    </View>
  )
}

export { BenefactorInformationScreen }