//  Cause Intro Component
import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { BR } from '../LineBreakComponent'
import styles from '../../Styles/globalstyles'

const CauseIntroComponent = ({ navigation, theme }) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={[styles.H2Bold, {color: theme.color}]}>Cause</Text>
      <Text style={[styles.H3, {color: theme.color}]}>
        A Charitable Organisation who wishes to aceept donations.
      </Text>
      <BR />
      <Button 
        title='Create Cause Profile' 
        onPress={() => navigation.navigate("Create Cause Profile")}
      />
    </View>
  )
}

export { CauseIntroComponent }