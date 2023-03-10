import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { BR } from '../LineBreakComponent'
import styles from '../../Styles/globalstyles'

const BenefactorIntroComponent: React.FC = ({navigation, theme}) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={[styles.H2Bold,{color: theme.color}]}>
        Benefactor
      </Text>
      <Text style={[styles.H3,{color: theme.color}]}>
          An individual who wishes to donate.
      </Text>
      <Text style={[styles.P, {color: theme.color}]}> Default font size </Text>
      <BR />
      <Button 
        title='Create Benefactor Profile' 
        onPress={() => navigation.navigate("Create Benefactor Profile")}
      />
      <BR />
      <Button 
        title='Benefactors Find out More' 
        onPress={() => navigation.navigate("Benefactor Information")}
      />
      <BR />
    </View>
  )
}

export { BenefactorIntroComponent }