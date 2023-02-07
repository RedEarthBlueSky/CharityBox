//  Cause Intro Component
import { StyleSheet, Text, View, Button } from 'react-native'
import * as React from 'react'
import { LineBreakComponent } from '../LineBreakComponent'
import styles from '../../Screens/styles/globalstyles'

const CauseIntroComponent = ({ navigation }) => {
  return (
    <View style={styles.componentContainer}>
      <Text style={styles.H2Bold}>Cause</Text>
      <Text style={styles.H3}>
        A chairty or company who wishes to aceept donations.
      </Text>
      <LineBreakComponent />
      <Button 
        title='Create Cause Profile' 
        onPress={() => navigation.navigate("Create Cause Profile")}
      />
    </View>
  )
}

export { CauseIntroComponent }